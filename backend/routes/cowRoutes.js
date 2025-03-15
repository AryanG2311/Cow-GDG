import express from "express";
import { Animal } from "../model/cowbull.model.js";
import { Owner } from "../model/owner.model.js";
import { generateBreedingRecommendation } from "../model/services/geminiService.js";  
const router = express.Router();

// Generalized add route for cow and bull
router.post("/add", async (req, res) => {
  try {
    const { 
      ownerId, name, tagNumber, genetic, physical, health, animalType, // Add animalType
    } = req.body;

    const owner = await Owner.findById(ownerId);
    if (!owner) {
      return res.status(404).json({ message: "Owner not found" });
    }

    // Ensure the owner has a cows array (if not, initialize it)
    if (!owner.cows) {
      owner.cows = [];  // Initialize cows as an empty array if it's undefined
    }

    const existingCow = await Animal.findOne({ tagNumber });
    if (existingCow) {
      return res.status(400).json({ message: "Cow with this tag number already exists" });
    }

    // Create a new cow
    const newCow = new Animal({
      ownerId,
      name,
      tagNumber,
      genetic,
      physical,
      health,
      animalType, // Add animalType
    });

    // Save cow to database
    const savedCow = await newCow.save();

    // Add cow ID to owner's cows list
    owner.cows.push(savedCow._id);
    await owner.save();

    res.status(201).json({ message: `${animalType} added successfully`, cow: savedCow });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// Generalized get route for cow or bull recommendations
router.get("/:animalType/:animalId/recommendation", async (req, res) => {
  try {
    const { animalType, animalId } = req.params;

    // Validate animal type
    if (!['cow', 'bull'].includes(animalType)) {
      return res.status(400).json({ message: "Invalid animal type. Must be 'cow' or 'bull'" });
    }

    // Find the appropriate animal by ID
    const animal = await Animal.findById(animalId);
    if (!animal || animal.animalType !== animalType) {
      return res.status(404).json({ message: `${animalType.charAt(0).toUpperCase() + animalType.slice(1)} not found` });
    }

    // Generate breeding recommendation for the animal
    generateBreedingRecommendation(animal)
      .then((recommendation) => {
        res.status(200).json({ animal, recommendation });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
