import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "Owner", required: true },
  name: { type: String, required: true },
  tagNumber: { type: String, unique: true, required: true },
  animalType: {
    type: String,
    enum: ['cow', 'bull'],    //animalType : "Cow"
    required: true, // Ensure the animal type is specified
  },
  genetic: {
    breedType: String,
    pedigreeInfo: String,
    feedingPlan: String,
    climaticSuitability: String,
    geneticDiversityScore: Number,
  },
  physical: {
    age: Number,
    bodyConditionScore: Number,
    weight: Number,
    height: Number,
    muscleMass: Number,  // Muscle mass may only be relevant for bulls, but we can leave it in the schema
  },
  health: {
    reproductiveHealth: String,
    diseaseResistance: Number,
    milkYield: Number,  // Relevant for cows
    milkFat: Number,  // Relevant for cows
    milkProtein: Number,  // Relevant for cows
    expectedCalvingDate: Date,  // Relevant for cows
    lastBreedingDate: Date,
    nextBreedingDate: Date,  // Relevant for bulls, but left in schema for both
  },
}, { timestamps: true });

export const Animal = mongoose.model("Animal", animalSchema);  // ✅ Unified model for cow and bull
