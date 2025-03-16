import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyBADA4B7gfQPWheKtDvVdYEIlUgXATgd4E");

export const generateBreedingRecommendation = async (cowData) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      As an AI cattle breeding expert, analyze this cow's data and provide breeding recommendations:
      
      Cow Details:
      - Name: ${cowData.name}
      - Breed: ${cowData.breed}
      - Age: ${cowData.physical.age} years
      - Weight: ${cowData.physical.weight} kg
      - Genetic Score: ${cowData.genetic.geneticDiversityScore}/100
      - Health Status: ${cowData.health.reporoductiveHealth}
      - Milk Yield: ${cowData.health.milkYield} L/day

      Please provide:
      1. A recommended breed for breeding
      2. 4 key reasoning points for this recommendation
      3. Expected benefits in terms of milk production, disease resistance, and growth
      4. 4 important health considerations
      5. An AI confidence score (0-100)

      Format the response as a JSON object with these exact keys:
      {
        "confidenceScore": number,
        "recommendedBreed": string,
        "reasoningPoints": string[],
        "expectedBenefits": {
          "milkProduction": string,
          "diseaseResistance": string,
          "growth": string
        },
        "healthConsiderations": string[]
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().trim();

    // Remove any triple backticks and format markers (if present)
    const cleanedText = text.replace(/^```json|```$/g, '').trim();
    
    return JSON.parse(cleanedText);
    
  } catch (error) {
    console.error('Error generating breeding recommendation:', error);
    throw new Error('Failed to generate breeding recommendation');
  }
};

export const checkCompatibility = async (cowData, bullData) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      As an AI cattle breeding expert, analyze the compatibility between the cow and bull data to provide a comprehensive breeding recommendation:

      Input Data:
      Cow Details:
      - Name: ${cowData.name}
      - Breed: ${cowData.breed || 'N/A'}
      - Age: ${cowData.physical.age} years
      - Weight: ${cowData.physical.weight} kg
      - Genetic Score: ${cowData.genetic.geneticDiversityScore}/100
      - Health Status: ${cowData.health.reporoductiveHealth || 'N/A'}
      - Milk Yield: ${cowData.health.milkYield} L/day

      Bull Details:
      - Name: ${bullData.name}
      - Breed: ${bullData.breed || 'N/A'}
      - Age: ${bullData.physical.age} years
      - Weight: ${bullData.physical.weight} kg
      - Genetic Score: ${bullData.genetic.geneticDiversityScore}/100
      - Health Status: ${bullData.health.reporoductiveHealth || 'N/A'}

      Analyze and provide:
      1. Overall compatibility score (0-100)
      2. Genetic compatibility assessment
      3. Physical compatibility evaluation
      4. Health risk assessment
      5. Expected offspring traits
      6. 3 key breeding recommendations
      7. 3 potential risk factors to monitor

      Format the response as a JSON object with these exact keys:
      {
        "compatibilityScore": number,
        "geneticCompatibility": {
          "score": number,
          "analysis": string,
          "riskFactors": string[]
        },
        "physicalCompatibility": {
          "score": number,
          "analysis": string,
          "considerations": string[]
        },
        "healthAssessment": {
          "score": number,
          "risks": string[],
          "recommendations": string[]
        },
        "expectedOffspring": {
          "traits": string[],
          "milkProductionPotential": string,
          "growthPotential": string
        },
        "breedingRecommendations": string[],
        "riskFactors": string[],
        "confidenceScore": number
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    // Extract and clean up the raw response text
    const rawText = await response.text();
    console.log("Raw Response:", rawText);

    // Clean up any unnecessary markers and extra spaces
    const cleanedText = rawText.trim().replace(/^```json|```$/g, '').trim();
    console.log("Cleaned Response:", cleanedText);

    // Parse the cleaned JSON string and ensure proper handling
    const parsedResponse = JSON.parse(cleanedText);

    // Return the parsed response
    return parsedResponse;
    
  } catch (error) {
    console.error('Error generating breeding compatibility:', error);
    throw new Error('Failed to generate breeding compatibility assessment');
  }
};
