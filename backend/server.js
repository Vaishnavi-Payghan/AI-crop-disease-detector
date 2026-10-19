const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "15mb" }));

// ================= GEMINI AI =================

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});


// ================= TEST ROUTE =================

app.get("/", (req, res) => {
    res.send("CropAI Backend is Running 🚀");
});


// ================= CROP ANALYSIS API =================

app.post("/api/analyze", async (req, res) => {

    try {

        const { image, mimeType, language } = req.body;


        // Check image
        if (!image) {

            return res.status(400).json({
                success: false,
                message: "Crop image is required"
            });

        }


        // ================= LANGUAGE =================

        const languageName =
            language === "mr"
                ? "Marathi"
                : language === "hi"
                ? "Hindi"
                : "English";


        // ================= AI PROMPT =================

        const prompt = `

You are an expert agricultural AI and crop disease detection assistant.

Carefully analyze the uploaded crop leaf image.

Your task is to:

1. Identify the crop/plant visible in the image.
2. Identify the possible disease or health condition.
3. Estimate confidence.
4. Determine disease severity.
5. Provide practical medicine/treatment.
6. Provide organic treatment.
7. Provide prevention tips.

The response language must be ${languageName}.

IMPORTANT:

- Return ONLY valid JSON.
- Do NOT use Markdown.
- Do NOT use code fences.
- Do NOT add any explanation outside JSON.
- Use exactly the fields given below.
- cropName must contain the identified crop name.
- If the crop cannot be identified, use "Unknown Crop".
- If the plant is healthy, disease must be "Healthy Crop".
- Confidence must be a percentage such as "92%".
- Give practical agricultural advice.

Return exactly this JSON structure:

{
  "cropName": "",
  "disease": "",
  "confidence": "",
  "severity": "",
  "medicine": "",
  "organic": "",
  "prevention": ""
}

Example:

{
  "cropName": "Tomato",
  "disease": "Early Blight",
  "confidence": "92%",
  "severity": "Moderate",
  "medicine": "Use an appropriate fungicide according to the label instructions.",
  "organic": "Remove infected leaves and use suitable organic fungicide.",
  "prevention": "Avoid excess moisture and maintain proper spacing between plants."
}

`;


        // ================= GEMINI REQUEST =================

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


        // ================= AI RESPONSE =================

        let text = response.text;


        if (!text) {

            throw new Error(
                "Gemini returned an empty response"
            );

        }


        // Remove Markdown code fences
        text = text
            .replace(/```json/gi, "")
            .replace(/```/g, "")
            .trim();


        // Extract JSON
        const start = text.indexOf("{");
        const end = text.lastIndexOf("}");


        if (start !== -1 && end !== -1) {

            text = text.substring(
                start,
                end + 1
            );

        }


        // Convert JSON
        const result = JSON.parse(text);


        // ================= SEND RESULT =================

        res.json({

            success: true,

            result: {

                cropName:
                    result.cropName || "Unknown Crop",

                disease:
                    result.disease || "Unknown",

                confidence:
                    result.confidence || "0%",

                severity:
                    result.severity || "Unknown",

                medicine:
                    result.medicine || "No treatment information available.",

                organic:
                    result.organic || "No organic treatment information available.",

                prevention:
                    result.prevention || "No prevention information available."

            }

        });


    } catch (error) {

        console.error(
            "Gemini Error:",
            error
        );


        res.status(500).json({

            success: false,

            message:
                error.message ||
                "AI analysis failed"

        });

    }

});


// ================= SERVER =================

const PORT = 5000;

app.listen(PORT, () => {

    console.log(
        `CropAI server running on http://localhost:${PORT}`
    );

});