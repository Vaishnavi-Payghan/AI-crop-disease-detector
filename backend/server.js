const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "15mb" }));

// Gemini AI
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// Test route
app.get("/", (req, res) => {
    res.send("CropAI Backend is Running 🚀");
});

// Crop Disease Detection API
app.post("/api/analyze", async (req, res) => {

    try {

        const { image, mimeType, language } = req.body;

        if (!image) {
            return res.status(400).json({
                success: false,
                message: "Crop image is required"
            });
        }

        const languageName =
            language === "mr" ? "Marathi" :
            language === "hi" ? "Hindi" :
            "English";

        const prompt = `
You are an expert agricultural AI.

Analyze this crop leaf image carefully and identify the possible disease.

Return ONLY valid JSON.
Do not use markdown.
Do not use code fences.

The response language must be ${languageName}.

Use exactly these fields:

{
  "disease": "",
  "confidence": "",
  "severity": "",
  "medicine": "",
  "organic": "",
  "prevention": ""
}

Confidence should be a percentage such as "87%".

If the leaf appears healthy, write "Healthy Crop" as disease.

Give practical treatment and prevention advice.
`;
        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: prompt
                        },
                        {
                            inlineData: {
                                mimeType: mimeType || "image/jpeg",
                                data: image
                            }
                        }
                    ]
                }
            ]
        });

        let text = response.text;

        if (!text) {
            throw new Error("Gemini returned an empty response");
        }

        // Remove markdown if Gemini accidentally adds it
        text = text
            .replace(/```json/gi, "")
            .replace(/```/g, "")
            .trim();

        // Extract JSON if extra text is present
        const start = text.indexOf("{");
        const end = text.lastIndexOf("}");

        if (start !== -1 && end !== -1) {
            text = text.substring(start, end + 1);
        }

        const result = JSON.parse(text);

        res.json({
            success: true,
            result: result
        });

    } catch (error) {

        console.error("Gemini Error:", error);

        res.status(500).json({
            success: false,
            message: error.message || "AI analysis failed"
        });
    }
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`CropAI server running on http://localhost:${PORT}`);
});