interface QuizQuestion {
  id: number;
  points: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

export const allQuestions: QuizQuestion[] = [
  {
    id: 1,
    points: 10,
    text: "What is the average milk yield of an Indian Gir cow per day?",
    options: ["5-10 liters", "10-15 liters", "15-20 liters", "20-25 liters"],
    correctAnswer: "10-15 liters"
  },
  {
    id: 2,
    points: 10,
    text: "What is the main purpose of cow farming?",
    options: ["Milk production", "Meat production", "Leather production", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: 3,
    points: 10,
    text: "Which of the following is NOT a common housing system for cows?",
    options: ["Loose housing", "Stall barn system", "Sky farming", "Tie stall system"],
    correctAnswer: "Sky farming"
  },
  {
    id: 4,
    points: 10,
    text: "What is the ideal temperature range for cow comfort?",
    options: ["0-10°C", "10-25°C", "25-40°C", "40-50°C"],
    correctAnswer: "10-25°C"
  },
  {
    id: 5,
    points: 10,
    text: "What is the main feed for cows in India?",
    options: ["Corn", "Dry fodder and green grass", "Fish meal", "Rice grains"],
    correctAnswer: "Dry fodder and green grass"
  },
  {
    id: 6,
    points: 10,
    text: "What is the most common artificial breeding method for cows?",
    options: ["Cross-breeding", "Artificial insemination", "Natural mating", "Genetic cloning"],
    correctAnswer: "Artificial insemination"
  },
  {
    id: 7,
    points: 10,
    text: "What is the average gestation period of a cow?",
    options: ["150 days", "220 days", "280 days", "365 days"],
    correctAnswer: "280 days"
  },
  {
    id: 8,
    points: 10,
    text: "Which hormone is responsible for milk production in cows?",
    options: ["Oxytocin", "Prolactin", "Insulin", "Testosterone"],
    correctAnswer: "Prolactin"
  },
  {
    id: 9,
    points: 10,
    text: "What is the name of the first milk produced by a cow after calving?",
    options: ["Whole milk", "Colostrum", "Homogenized milk", "Cream"],
    correctAnswer: "Colostrum"
  },
  {
    id: 10,
    points: 10,
    text: "Which Indian cow breed is well known for heat resistance and high fertility?",
    options: ["Gir", "Jersey", "Holstein Friesian", "Angus"],
    correctAnswer: "Gir"
  },
  {
    id: 11,
    points: 10,
    text: "What is the term for a young female cow that has not yet calved?",
    options: ["Heifer", "Calf", "Bull", "Ox"],
    correctAnswer: "Heifer"
  },
  {
    id: 12,
    points: 10,
    text: "What is a male cow primarily used for breeding called?",
    options: ["Ox", "Bull", "Steer", "Heifer"],
    correctAnswer: "Bull"
  },
  {
    id: 13,
    points: 10,
    text: "Which method is commonly used to detect pregnancy in cows?",
    options: ["Ultrasound", "Blood test", "Rectal palpation", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: 14,
    points: 10,
    text: "What is crossbreeding in cows?",
    options: ["Breeding of two cows of the same breed", "Breeding of cows and buffaloes", "Breeding between different cow breeds to improve characteristics", "None of the above"],
    correctAnswer: "Breeding between different cow breeds to improve characteristics"
  },
  {
    id: 15,
    points: 10,
    text: "Which milk protein in Indian cows is considered healthier for humans?",
    options: ["A1", "A2", "Casein", "Whey"],
    correctAnswer: "A2"
  },
  {
    id: 16,
    points: 10,
    text: "What is the major benefit of cow dung in organic farming?",
    options: ["It increases soil fertility", "It reduces water absorption", "It destroys crops", "It hardens the soil"],
    correctAnswer: "It increases soil fertility"
  },
  {
    id: 17,
    points: 10,
    text: "What gas is primarily produced from cow dung in biogas plants?",
    options: ["Oxygen", "Methane", "Carbon monoxide", "Hydrogen"],
    correctAnswer: "Methane"
  },
  {
    id: 18,
    points: 10,
    text: "Which cow breed is mainly used for drought-resistant farming in India?",
    options: ["Sahiwal", "Tharparkar", "Jersey", "Red Sindhi"],
    correctAnswer: "Tharparkar"
  },
  {
    id: 19,
    points: 10,
    text: "Which product is NOT derived from cows?",
    options: ["Ghee", "Leather", "Silk", "Panchagavya"],
    correctAnswer: "Silk"
  },
  {
    id: 20,
    points: 10,
    text: "What is Panchagavya?",
    options: ["A sacred ritual", "A mixture of five cow-based products used in agriculture and Ayurveda", "A breed of cow", "A type of milk protein"],
    correctAnswer: "A mixture of five cow-based products used in agriculture and Ayurveda"
  },
  {
    id: 21,
    points: 10,
    text: "Which nutrient is naturally high in cow's milk?",
    options: ["Iron", "Calcium", "Vitamin C", "Sodium"],
    correctAnswer: "Calcium"
  },
  {
    id: 22,
    points: 10,
    text: "What is the lifespan of an average Indian cow?",
    options: ["5-10 years", "10-15 years", "15-20 years", "20-25 years"],
    correctAnswer: "15-20 years"
  },
  {
    id: 23,
    points: 10,
    text: "Which part of a cow's body is primarily used to digest fibrous food?",
    options: ["Stomach", "Liver", "Pancreas", "Kidneys"],
    correctAnswer: "Stomach"
  },
  {
    id: 24,
    points: 10,
    text: "Which cow breed is known as the 'best milking breed' in the world?",
    options: ["Holstein Friesian", "Jersey", "Gir", "Red Sindhi"],
    correctAnswer: "Holstein Friesian"
  },
  {
    id: 25,
    points: 10,
    text: "What is the main role of a cow's rumen?",
    options: ["Storing water", "Digesting fiber", "Producing milk", "Filtering blood"],
    correctAnswer: "Digesting fiber"
  },
  {
    id: 26,
    points: 10,
    text: "What is the average body temperature of a healthy cow?",
    options: ["35-36°C", "37-38°C", "38-39°C", "40-41°C"],
    correctAnswer: "38-39°C"
  },
  {
    id: 27,
    points: 10,
    text: "Which type of farming uses cow urine as an organic fertilizer?",
    options: ["Hydroponics", "Aquaponics", "Organic farming", "Factory farming"],
    correctAnswer: "Organic farming"
  },
  {
    id: 28,
    points: 10,
    text: "How does cow manure help in sustainable farming?",
    options: ["It improves soil health", "It acts as a natural pesticide", "It helps in composting", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: 29,
    points: 10,
    text: "Which Indian breed is known for its ability to survive in extreme heat?",
    options: ["Sahiwal", "Red Sindhi", "Tharparkar", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: 30,
    points: 10,
    text: "What percentage of water is present in cow's milk?",
    options: ["50-60%", "70-80%", "80-90%", "90-95%"],
    correctAnswer: "80-90%"
  },
  {
    id: 31,
    points: 10,
    text: "What is the average fat content of cow milk?",
    options: ["2-3%", "3-4%", "4-5%", "5-6%"],
    correctAnswer: "3-4%"
  },
  {
    id: 32,
    points: 10,
    text: "Which country has the largest dairy industry?",
    options: ["India", "USA", "China", "Brazil"],
    correctAnswer: "India"
  },
  {
    id: 33,
    points: 10,
    text: "Which vitamin is crucial for healthy bones in cows?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin D", "Vitamin C"],
    correctAnswer: "Vitamin D"
  },
  {
    id: 34,
    points: 10,
    text: "What is the name of the first milk produced by a cow after calving?",
    options: ["Whole milk", "Colostrum", "Homogenized milk", "Cream"],
    correctAnswer: "Colostrum"
  },
  {
    id: 35,
    points: 10,
    text: "Which part of a cow's body is primarily used to digest fibrous food?",
    options: ["Stomach", "Liver", "Pancreas", "Kidneys"],
    correctAnswer: "Stomach"
  },
  {
    id: 36,
    points: 10,
    text: "Which breed is famous for its high-fat content in milk?",
    options: ["Jersey", "Holstein", "Gir", "Red Sindhi"],
    correctAnswer: "Jersey"
  },
  {
    id: 37,
    points: 10,
    text: "What is the approximate weight of a healthy adult Indian cow?",
    options: ["200-400 kg", "400-600 kg", "600-800 kg", "800-1000 kg"],
    correctAnswer: "400-600 kg"
  },
  {
    id: 38,
    points: 10,
    text: "What is the function of cow horns?",
    options: ["Cooling the body", "Defending against predators", "Both A and B", "None of the above"],
    correctAnswer: "Both A and B"
  },
  {
    id: 39,
    points: 10,
    text: "Which breed is known for its adaptability to extreme climates?",
    options: ["Tharparkar", "Jersey", "Holstein", "Friesian"],
    correctAnswer: "Tharparkar"
  },
  {
    id: 40,
    points: 10,
    text: "What is the lifespan of an average Indian cow?",
    options: ["5-10 years", "10-15 years", "15-20 years", "20-25 years"],
    correctAnswer: "15-20 years"
  }
];

// Function to get 10 random questions
function getRandomQuestions(count: number = 10): QuizQuestion[] {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export const questions = getRandomQuestions();