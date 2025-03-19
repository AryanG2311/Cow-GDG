import express from "express";
import { Owner } from "../model/owner.model.js";
import { Animal } from "../model/cowbull.model.js"; // Using the Animal model
import { checkCompatibility } from "../model/services/geminiService.js"; // Import the compatibility check function
import jwt from "jsonwebtoken";
import { verifyUser } from "../middleware.js";

const router = express.Router();

// Route to add a new owner (unchanged)
router.post("/add", async (req, res) => {
  try {
    const { name, email, contact, address } = req.body;

    // Check if the owner already exists by email
    const existingOwner = await Owner.findOne({ email });
    if (existingOwner) {
      return res
        .status(400)
        .json({ message: "Owner with this email already exists" });
    }

    // Create new owner
    const newOwner = new Owner({
      name,
      email,
      contact,
      address,
    });

    const savedOwner = await newOwner.save();

    res
      .status(201)
      .json({ message: "Owner added successfully", owner: savedOwner });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/signIn", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email)
      return res.status(400).json({ message: "Please provide all detail" });

    const userExist = await Owner.findOne({ email: email });

    if (!userExist)
      return res.status(400).json({ message: "Please add user first" });

    const userId = userExist._id;
    const token = jwt.sign(
      {
        id: userId,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRE }
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res.status(201).cookie("token", token, options).json({
      message: "Owner Login successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/signOut", (req, res) => {
  try {
    return res
      .status(200)
      .clearCookie("token", {
        httpOnly: true,
        secure: true,
      })
      .json({
        message: "User LogOut Successfully",
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get(verifyUser, "/getOwnerDetails", (req, res) => {
  try {
    const user = req.user;

    const userId = user._id;

    return res.status(200).json({
      message: "Owner data fetch Successfully",
      data: user,
      id: userId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to get all cows for a specific owner
router.get("/:ownerId/cows", async (req, res) => {
  try {
    const { ownerId } = req.params;

    // Check if owner exists
    const owner = await Owner.findById(ownerId);
    if (!owner) {
      return res.status(404).json({ message: "Owner not found" });
    }

    // Fetch all cows (animals where animalType is 'cow') that belong to the owner
    const cows = await Animal.find({ ownerId, animalType: "cow" });

    res.status(200).json(cows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Route to get all bulls for a specific owner
router.get("/:ownerId/bulls", async (req, res) => {
  try {
    const { ownerId } = req.params;

    // Check if owner exists
    const owner = await Owner.findById(ownerId);
    if (!owner) {
      return res.status(404).json({ message: "Owner not found" });
    }

    // Fetch all bulls (animals where animalType is 'bull') that belong to the owner
    const bulls = await Animal.find({ ownerId, animalType: "bull" });

    res.status(200).json(bulls);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/:cowid/:bullid/compat", async (req, res) => {
  try {
    const { cowid, bullid } = req.params;

    // Find the cow and bull by ID
    const cow = await Animal.findById(cowid);
    const bull = await Animal.findById(bullid);
    console.log(cow);
    console.log(bull);
    if (!cow || cow.animalType !== "cow") {
      return res.status(404).json({ message: "Cow not found" });
    }

    if (!bull || bull.animalType !== "bull") {
      return res.status(404).json({ message: "Bull not found" });
    }

    // Check compatibility
    const compatibility = await checkCompatibility(cow, bull);

    res.status(200).json({ cow, bull, compatibility });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
