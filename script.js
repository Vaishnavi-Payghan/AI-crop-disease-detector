// ==========================================
// CropAI Language System
// English | मराठी | हिंदी
// ==========================================

const translations = {

    en: {
        badge: "AI Powered Feature",
        title: "AI Crop Disease",
        detector: "Detector",

        description:
            "Protect your crops with AI-powered disease detection. Upload a crop leaf image and receive instant disease identification, treatment recommendations and prevention tips within seconds.",

        live: "LIVE SCAN",

        disease: "🦠 Disease Found",
        early: "Early Blight",
        confidence: "78% Confidence",

        analysis: "🤖 AI Analysis",
        accuracy: "97.4% Accuracy",

        healthy: "🌱 Healthy Crop",

        upload: "Upload Crop Image",
        detection: "AI Disease Detection",
        treatment: "Smart Treatment Suggestions",
        prevention: "Prevention & Care Tips",
        fast: "Fast Results in Seconds",

        button: "🧬 Try AI Disease Detector"
    },


    mr: {
        badge: "AI आधारित सुविधा",
        title: "AI पीक रोग",
        detector: "शोधक",

        description:
            "AI च्या मदतीने पिकांमधील रोग ओळखून आपल्या पिकांचे संरक्षण करा. पिकाच्या पानाचा फोटो अपलोड करा आणि काही सेकंदांत रोगाची ओळख, उपचारांच्या सूचना आणि प्रतिबंधात्मक उपाय मिळवा.",

        live: "थेट स्कॅन",

        disease: "🦠 रोग आढळला",
        early: "लवकर येणारा करपा",
        confidence: "78% विश्वास पातळी",

        analysis: "🤖 AI विश्लेषण",
        accuracy: "97.4% अचूकता",

        healthy: "🌱 निरोगी पीक",

        upload: "पिकाचा फोटो अपलोड करा",
        detection: "AI रोग शोध",
        treatment: "स्मार्ट उपचार सूचना",
        prevention: "प्रतिबंध आणि काळजीच्या सूचना",
        fast: "काही सेकंदांत जलद परिणाम",

        button: "🧬 AI रोग शोधक वापरून पहा"
    },


    hi: {
        badge: "AI आधारित सुविधा",
        title: "AI फसल रोग",
        detector: "पहचानकर्ता",

        description:
            "AI की मदद से अपनी फसलों को रोगों से बचाएं। फसल के पत्ते की तस्वीर अपलोड करें और कुछ ही सेकंड में रोग की पहचान, उपचार सुझाव और बचाव की जानकारी प्राप्त करें।",

        live: "लाइव स्कैन",

        disease: "🦠 रोग पाया गया",
        early: "अर्ली ब्लाइट",
        confidence: "78% विश्वास स्तर",

        analysis: "🤖 AI विश्लेषण",
        accuracy: "97.4% सटीकता",

        healthy: "🌱 स्वस्थ फसल",

        upload: "फसल की तस्वीर अपलोड करें",
        detection: "AI रोग पहचान",
        treatment: "स्मार्ट उपचार सुझाव",
        prevention: "बचाव और देखभाल के सुझाव",
        fast: "कुछ ही सेकंड में तेज परिणाम",

        button: "🧬 AI रोग पहचानकर्ता आज़माएं"
    }

};


// ==========================================
// CHANGE LANGUAGE
// ==========================================

function changeLanguage(lang) {

    const t = translations[lang];

    if (!t) return;


    // Badge
    document.querySelector(".badge").textContent =
        t.badge;


    // Main Heading
    const heading =
        document.querySelector(".detector-content h2");

    heading.innerHTML =
        `${t.title} <span>${t.detector}</span>`;


    // Description
    const description = document.getElementById("description");

if (description) {
    description.innerHTML = t.description;
}


    // Live Scan
    document.querySelector(".live-tag").innerHTML =
        `<i class="fas fa-circle"></i> ${t.live}`;


    // Disease Card
    const diseaseCard =
        document.querySelector(".disease-card");

    diseaseCard.querySelector("span").textContent =
        t.disease;

    diseaseCard.querySelector("h4").textContent =
        t.early;

    diseaseCard.querySelector("p").textContent =
        t.confidence;


    // AI Analysis
    const aiCard =
        document.querySelector(".ai-card");

    aiCard.querySelector("span").textContent =
        t.analysis;

    aiCard.querySelector("h4").textContent =
        t.accuracy;


    // Healthy Crop
    document.querySelector(
        ".healthy-card span"
    ).textContent = t.healthy;


    // Feature Boxes
    const features =
        document.querySelectorAll(".feature");


    features[0].querySelector("span").textContent =
        t.upload;

    features[1].querySelector("span").textContent =
        t.detection;

    features[2].querySelector("span").textContent =
        t.treatment;

    features[3].querySelector("span").textContent =
        t.prevention;

    features[4].querySelector("span").textContent =
        t.fast;


    // Main Button
    document.querySelector(".detector-btn").innerHTML =
        `${t.button}
        <i class="fas fa-arrow-right"></i>`;


    // ==========================================
    // Active Language
    // ==========================================

    const buttons =
        document.querySelectorAll(".lang-btn");


    buttons.forEach(function(button) {
        button.classList.remove("active");
    });


    if (lang === "en") {
        buttons[0].classList.add("active");
    }

    if (lang === "mr") {
        buttons[1].classList.add("active");
    }

    if (lang === "hi") {
        buttons[2].classList.add("active");
    }


    // Save language
    localStorage.setItem(
        "cropAI_language",
        lang
    );
}


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const savedLanguage =
            localStorage.getItem("cropAI_language") || "en";

        changeLanguage(savedLanguage);

    }
);