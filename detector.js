// =====================================================
// CropAI - Detector.js
// Language + Image Upload + Backend AI + PDF Report
// English | मराठी | हिंदी
// =====================================================


// =====================================================
// TRANSLATIONS
// =====================================================

const translations = {

    // =================================================
    // ENGLISH
    // =================================================

    en: {
        heroBadge: "● Powered by Vision AI",
        heroTitle: "AI Crop Disease",
        heroDetector: "Detector",

        heroDescription:
            "Upload a crop leaf image and let AI instantly detect diseases, provide confidence score, treatment and prevention tips.",

        diseaseDetector: "Disease Detector",
        healthAnalysis: "AI Powered Crop Health Analysis",

        info:
            "Our Vision AI model trained on 2.4M+ crop images detects diseases across 200+ plant varieties.",

        uploadLeaf: "Upload Crop Leaf",
        dragDrop: "Drag & Drop Image",
        chooseImage: "Choose Image",

        analyzing: "Analyzing Image...",

        gallery: "🖼 Upload from Gallery",
        camera: "📷 Capture with Camera",

        analyze: "🚀 Analyze Image",
        another: "🔄 Analyze Another Image",

        diseases: "✔ 200+ Diseases",
        accuracy: "✔ 97% Accuracy",
        instant: "✔ Instant Result",
        free: "✔ Free To Use",

        preview: "🌿 Analysis Preview",
        ready: "Ready",
        confidence: "Confidence",

        cropIdentified: "CROP IDENTIFIED",
        analysisTime: "ANALYSIS TIME",
        cropWaiting: "_ _ _",

        diseaseIdentified: "🦠 DISEASE IDENTIFIED",
        awaiting: "Awaiting Image...",

        confidenceScore: "📊 CONFIDENCE SCORE",
        severity: "⚡ SEVERITY LEVEL",

        medicineTitle: "💊 RECOMMENDED MEDICINE",
        medicinePending: "Pending Analysis...",

        organicTitle: "🌱 ORGANIC TREATMENT",
        organicPending: "Pending Analysis...",

        preventionTitle: "🛡 PREVENTION TIPS",
        preventionText:
            "Upload a crop image to get prevention tips.",

        download: "📄 Download Report",

        uploadAlert: "Please Upload Crop Image",
        aiError: "AI Error"
    },


    // =================================================
    // MARATHI
    // =================================================

    mr: {
        heroBadge: "● Vision AI द्वारे समर्थित",
        heroTitle: "AI पीक रोग",
        heroDetector: "शोधक",

        heroDescription:
            "पिकाच्या पानाचा फोटो अपलोड करा आणि AI च्या मदतीने काही सेकंदांत रोग ओळखा, विश्वास पातळी, उपचार आणि प्रतिबंधात्मक उपाय मिळवा.",

        diseaseDetector: "रोग शोधक",
        healthAnalysis: "AI आधारित पीक आरोग्य विश्लेषण",

        info:
            "2.4M+ पिकांच्या फोटोंवर प्रशिक्षित आमचे Vision AI मॉडेल 200+ वनस्पतींच्या जातींमधील रोग ओळखते.",

        uploadLeaf: "पिकाचे पान अपलोड करा",
        dragDrop: "फोटो येथे ड्रॅग आणि ड्रॉप करा",
        chooseImage: "फोटो निवडा",

        analyzing: "फोटोचे विश्लेषण सुरू आहे...",

        gallery: "🖼 गॅलरीमधून फोटो अपलोड करा",
        camera: "📷 कॅमेऱ्याने फोटो काढा",

        analyze: "🚀 फोटोचे विश्लेषण करा",
        another: "🔄 दुसरा फोटो तपासा",

        diseases: "✔ 200+ रोग",
        accuracy: "✔ 97% अचूकता",
        instant: "✔ त्वरित निकाल",
        free: "✔ मोफत वापर",

        preview: "🌿 विश्लेषण पूर्वदृश्य",
        ready: "तयार",
        confidence: "विश्वास पातळी",

        cropIdentified: "ओळखलेले पीक",
        analysisTime: "विश्लेषणाची वेळ",
        cropWaiting: "_ _ _",

        diseaseIdentified: "🦠 रोग ओळखला गेला",
        awaiting: "फोटोची प्रतीक्षा आहे...",

        confidenceScore: "📊 विश्वास पातळी",
        severity: "⚡ रोगाची तीव्रता",

        medicineTitle: "💊 शिफारस केलेले औषध",
        medicinePending: "विश्लेषणाची प्रतीक्षा आहे...",

        organicTitle: "🌱 सेंद्रिय उपचार",
        organicPending: "विश्लेषणाची प्रतीक्षा आहे...",

        preventionTitle: "🛡 प्रतिबंधात्मक उपाय",
        preventionText:
            "प्रतिबंधात्मक उपाय मिळवण्यासाठी पिकाचा फोटो अपलोड करा.",

        download: "📄 रिपोर्ट डाउनलोड करा",

        uploadAlert: "कृपया पिकाचा फोटो अपलोड करा",
        aiError: "AI मध्ये त्रुटी आली"
    },


    // =================================================
    // HINDI
    // =================================================

    hi: {
        heroBadge: "● Vision AI द्वारा संचालित",
        heroTitle: "AI फसल रोग",
        heroDetector: "पहचानकर्ता",

        heroDescription:
            "फसल के पत्ते की तस्वीर अपलोड करें और AI की मदद से कुछ ही सेकंड में रोग की पहचान करें, विश्वास स्तर, उपचार और बचाव के सुझाव प्राप्त करें।",

        diseaseDetector: "रोग पहचानकर्ता",
        healthAnalysis: "AI आधारित फसल स्वास्थ्य विश्लेषण",

        info:
            "2.4M+ फसल तस्वीरों पर प्रशिक्षित हमारा Vision AI मॉडल 200+ पौधों की किस्मों के रोगों की पहचान करता है।",

        uploadLeaf: "फसल का पत्ता अपलोड करें",
        dragDrop: "तस्वीर यहां ड्रैग और ड्रॉप करें",
        chooseImage: "तस्वीर चुनें",

        analyzing: "तस्वीर का विश्लेषण हो रहा है...",

        gallery: "🖼 गैलरी से तस्वीर अपलोड करें",
        camera: "📷 कैमरे से तस्वीर लें",

        analyze: "🚀 तस्वीर का विश्लेषण करें",
        another: "🔄 दूसरी तस्वीर जांचें",

        diseases: "✔ 200+ रोग",
        accuracy: "✔ 97% सटीकता",
        instant: "✔ तुरंत परिणाम",
        free: "✔ मुफ्त उपयोग",

        preview: "🌿 विश्लेषण पूर्वावलोकन",
        ready: "तैयार",
        confidence: "विश्वास स्तर",

        cropIdentified: "पहचानी गई फसल",
        analysisTime: "विश्लेषण का समय",
        cropWaiting: "_ _ _",

        diseaseIdentified: "🦠 रोग की पहचान हुई",
        awaiting: "तस्वीर की प्रतीक्षा है...",

        confidenceScore: "📊 विश्वास स्तर",
        severity: "⚡ रोग की गंभीरता",

        medicineTitle: "💊 अनुशंसित दवा",
        medicinePending: "विश्लेषण की प्रतीक्षा है...",

        organicTitle: "🌱 जैविक उपचार",
        organicPending: "विश्लेषण की प्रतीक्षा है...",

        preventionTitle: "🛡 बचाव के सुझाव",
        preventionText:
            "बचाव के सुझाव प्राप्त करने के लिए फसल की तस्वीर अपलोड करें।",

        download: "📄 रिपोर्ट डाउनलोड करें",

        uploadAlert: "कृपया फसल की तस्वीर अपलोड करें",
        aiError: "AI में त्रुटि हुई"
    }

};


// =====================================================
// ELEMENTS
// =====================================================

const imageInput =
    document.getElementById("imageInput");

const uploadedImage =
    document.getElementById("uploadedImage");

const previewLeaf =
    document.getElementById("previewLeaf");

const placeholder =
    document.getElementById("placeholder");

const detectBtn =
    document.getElementById("detectBtn");

const anotherBtn =
    document.getElementById("anotherBtn");

const overlay =
    document.getElementById("analysisOverlay");

const progressFill =
    document.getElementById("progressFill");

const progressText =
    document.getElementById("progressText");


// =====================================================
// CURRENT LANGUAGE
// =====================================================

let currentLanguage =
    localStorage.getItem("cropAI_language") || "en";


// =====================================================
// CHANGE LANGUAGE
// =====================================================

function changeLanguage(lang) {

    const t = translations[lang];

    if (!t) return;

    currentLanguage = lang;


    // =================================================
    // HERO
    // =================================================

    const heroBadge =
        document.querySelector(".hero .badge");

    if (heroBadge) {
        heroBadge.textContent =
            t.heroBadge;
    }


    const heroTitle =
        document.querySelector(".hero h1");

    if (heroTitle) {
        heroTitle.innerHTML =
            `${t.heroTitle} <span>${t.heroDetector}</span>`;
    }


    const heroDescription =
        document.querySelector(".hero > p");

    if (heroDescription) {
        heroDescription.textContent =
            t.heroDescription;
    }


    // =================================================
    // LEFT TITLE
    // =================================================

    const titleBox =
        document.querySelector(".title-box");

    if (titleBox) {

        const h2 =
            titleBox.querySelector("h2");

        const p =
            titleBox.querySelector("p");

        if (h2) {
            h2.textContent =
                t.diseaseDetector;
        }

        if (p) {
            p.textContent =
                t.healthAnalysis;
        }
    }


    // =================================================
    // INFO
    // =================================================

    const info =
        document.querySelector(".info");

    if (info) {
        info.textContent =
            t.info;
    }


    // =================================================
    // UPLOAD
    // =================================================

    const uploadTitle =
        document.querySelector("#placeholder h3");

    const dragDrop =
        document.querySelector("#placeholder p");

    const chooseImageLabel =
        document.querySelector("#placeholder label");

    if (uploadTitle) {
        uploadTitle.textContent =
            t.uploadLeaf;
    }

    if (dragDrop) {
        dragDrop.textContent =
            t.dragDrop;
    }

    if (chooseImageLabel) {
        chooseImageLabel.textContent =
            t.chooseImage;
    }


    // =================================================
    // ANALYSIS
    // =================================================

    const analyzingText =
        document.querySelector("#analysisOverlay h3");

    if (analyzingText) {
        analyzingText.textContent =
            t.analyzing;
    }


    // =================================================
    // BUTTONS
    // =================================================

    const groupButtons =
        document.querySelectorAll(
            ".button-group button"
        );

    if (groupButtons[0]) {
        groupButtons[0].textContent =
            t.gallery;
    }

    if (groupButtons[1]) {
        groupButtons[1].textContent =
            t.camera;
    }

    if (detectBtn) {
        detectBtn.textContent =
            t.analyze;
    }

    if (anotherBtn) {
        anotherBtn.textContent =
            t.another;
    }


    // =================================================
    // CHIPS
    // =================================================

    const chips =
        document.querySelectorAll(".chips span");

    if (chips[0]) {
        chips[0].textContent =
            t.diseases;
    }

    if (chips[1]) {
        chips[1].textContent =
            t.accuracy;
    }

    if (chips[2]) {
        chips[2].textContent =
            t.instant;
    }

    if (chips[3]) {
        chips[3].textContent =
            t.free;
    }


    // =================================================
    // PREVIEW
    // =================================================

    const previewHeader =
        document.querySelector(".preview-header");

    if (previewHeader) {

        const spans =
            previewHeader.querySelectorAll("span");

        if (spans[0]) {
            spans[0].textContent =
                t.preview;
        }

        if (spans[1]) {
            spans[1].textContent =
                t.ready;
        }
    }


    const confidenceLabel =
        document.querySelector(
            ".confidence-box small"
        );

    if (confidenceLabel) {
        confidenceLabel.textContent =
            t.confidence;
    }


    // =================================================
// CROP IDENTIFIED + ANALYSIS TIME
// =================================================

    const cropIdentified =
        document.getElementById("cropIdentified");

    if (cropIdentified) {
        cropIdentified.textContent =
            t.cropWaiting;
    }

    const analysisTime =
        document.getElementById("analysisTime");

    if (analysisTime) {
        analysisTime.textContent = "--";
    }


    // =================================================
    // DISEASE
    // =================================================

    const diseaseTitle =
        document.querySelector(
            ".result-card.disease h5"
        );

    if (diseaseTitle) {
        diseaseTitle.textContent =
            t.diseaseIdentified;
    }


    // =================================================
    // RESULT GRID
    // =================================================

    const resultCards =
        document.querySelectorAll(
            ".result-grid .result-card"
        );

    if (resultCards[0]) {

        const h5 =
            resultCards[0].querySelector("h5");

        if (h5) {
            h5.textContent =
                t.confidenceScore;
        }
    }


    if (resultCards[1]) {

        const h5 =
            resultCards[1].querySelector("h5");

        if (h5) {
            h5.textContent =
                t.severity;
        }
    }


    // =================================================
    // MEDICINE
    // =================================================

    const medicine =
        document.getElementById("medicine");

    if (medicine) {

        const card =
            medicine.closest(".result-card");

        if (card) {

            const h5 =
                card.querySelector("h5");

            if (h5) {
                h5.textContent =
                    t.medicineTitle;
            }
        }

        if (
            medicine.textContent ===
                "Pending Analysis..." ||
            medicine.textContent ===
                translations.en.medicinePending
        ) {

            medicine.textContent =
                t.medicinePending;
        }
    }


    // =================================================
    // ORGANIC
    // =================================================

    const organic =
        document.getElementById("organic");

    if (organic) {

        const card =
            organic.closest(".result-card");

        if (card) {

            const h5 =
                card.querySelector("h5");

            if (h5) {
                h5.textContent =
                    t.organicTitle;
            }
        }

        if (
            organic.textContent ===
                "Pending Analysis..." ||
            organic.textContent ===
                translations.en.organicPending
        ) {

            organic.textContent =
                t.organicPending;
        }
    }


    // =================================================
    // PREVENTION
    // =================================================

    const prevention =
        document.getElementById("prevention");

    if (prevention) {

        const card =
            prevention.closest(".result-card");

        if (card) {

            const h5 =
                card.querySelector("h5");

            if (h5) {
                h5.textContent =
                    t.preventionTitle;
            }
        }

        prevention.textContent =
            t.preventionText;
    }


    // =================================================
    // DOWNLOAD
    // =================================================

    const downloadBtn =
        document.getElementById("downloadBtn");

    if (downloadBtn) {
        downloadBtn.textContent =
            t.download;
    }


    // =================================================
    // ACTIVE LANGUAGE BUTTON
    // =================================================

    const langButtons =
        document.querySelectorAll(".lang-btn");

    langButtons.forEach(button => {
        button.classList.remove("active");
    });

    if (
        lang === "en" &&
        langButtons[0]
    ) {
        langButtons[0].classList.add("active");
    }

    if (
        lang === "mr" &&
        langButtons[1]
    ) {
        langButtons[1].classList.add("active");
    }

    if (
        lang === "hi" &&
        langButtons[2]
    ) {
        langButtons[2].classList.add("active");
    }


    // =================================================
    // SAVE LANGUAGE
    // =================================================

    localStorage.setItem(
        "cropAI_language",
        lang
    );
}


// =====================================================
// IMAGE PREVIEW
// =====================================================

if (imageInput) {

    imageInput.addEventListener(
        "change",
        function () {

            const file =
                this.files[0];

            if (!file) return;


            // File type check

            if (!file.type.startsWith("image/")) {

                alert(
                    translations[currentLanguage]
                        .uploadAlert
                );

                return;
            }


            const reader =
                new FileReader();


            reader.onload =
                function (e) {

                    uploadedImage.src =
                        e.target.result;

                    previewLeaf.src =
                        e.target.result;

                    uploadedImage.style.display =
                        "block";

                    placeholder.style.display =
                        "none";
                };


            reader.readAsDataURL(file);
        }
    );
}


// =====================================================
// ANALYZE BUTTON
// =====================================================

if (detectBtn) {

    detectBtn.addEventListener(
        "click",
        function () {

            const t =
                translations[currentLanguage];


            if (
                !imageInput ||
                !imageInput.files.length
            ) {

                alert(
                    t.uploadAlert
                );

                return;
            }


            overlay.style.display =
                "flex";


            let progress = 0;


            progressFill.style.width =
                "0%";

            progressText.textContent =
                "0%";


            detectBtn.disabled =
                true;


            const timer =
                setInterval(
                    () => {

                        progress++;


                        progressFill.style.width =
                            progress + "%";

                        progressText.textContent =
                            progress + "%";


                        if (progress >= 100) {

                            clearInterval(timer);


                            overlay.style.display =
                                "none";


                            showResults();
                        }

                    },
                    35
                );
        }
    );
}


// =====================================================
// BACKEND AI ANALYSIS
// =====================================================

async function showResults() {

    const file =
        imageInput.files[0];

    if (!file) return;


    try {

        const reader =
            new FileReader();


        reader.onload =
            async function () {

                try {

                    const base64 =
                        reader.result.split(",")[1];


                    // =================================
                    // SEND IMAGE TO NODE.JS BACKEND
                    // =================================

                    const response =
                        await fetch(
                            "http://localhost:5000/api/analyze",
                            {
                                method: "POST",

                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },

                                body: JSON.stringify({
                                    image: base64,
                                    mimeType: file.type,
                                    language:
                                        currentLanguage
                                })
                            }
                        );


                    // =================================
                    // BACKEND RESPONSE
                    // =================================

                    const result =
                        await response.json();


                    console.log(
                        "Backend Response:",
                        result
                    );


                    // =================================
                    // ERROR CHECK
                    // =================================

                    if (
                        !response.ok ||
                        !result.success
                    ) {

                        console.error(
                            "AI Error:",
                            result.message
                        );


                        alert(
                            result.message ||
                            translations[
                                currentLanguage
                            ].aiError
                        );


                        detectBtn.disabled =
                            false;

                        return;
                    }


                    // =================================
                    // AI RESULT
                    // =================================

                    const data =
                        result.result;


                    console.log(
                        "AI Result:",
                        data
                    );
                    // =================================
                    // CROP IDENTIFICATION
                    // =================================

                    const cropIdentified =
                        document.getElementById(
                            "cropIdentified"
                        );

                    if (cropIdentified) {

                        cropIdentified.textContent =
                            data.cropName ||
                            "Unknown";
                    }


                    // =================================
                    // DISEASE
                    // =================================

                    const diseaseName =
                        document.getElementById(
                            "diseaseName"
                        );

                    if (diseaseName) {

                        diseaseName.textContent =
                            data.disease ||
                            "Unknown";
                    }


                    // =================================
                    // CONFIDENCE
                    // =================================

                    const confidence =
                        document.getElementById(
                            "confidence"
                        );

                    if (confidence) {

                        confidence.textContent =
                            data.confidence ||
                            "--%";
                    }


                    const confidenceScore =
                        document.getElementById(
                            "confidenceScore"
                        );

                    if (confidenceScore) {

                        confidenceScore.textContent =
                            data.confidence ||
                            "--%";
                    }


                    // =================================
                    // SEVERITY
                    // =================================

                    const severity =
                        document.getElementById(
                            "severity"
                        );

                    if (severity) {

                        severity.textContent =
                            data.severity ||
                            "--";
                    }


                    // =================================
                    // MEDICINE
                    // =================================

                    const medicine =
                        document.getElementById(
                            "medicine"
                        );

                    if (medicine) {

                        medicine.textContent =
                            data.medicine ||
                            translations[
                                currentLanguage
                            ].medicinePending;
                    }


                    // =================================
                    // ORGANIC TREATMENT
                    // =================================

                    const organic =
                        document.getElementById(
                            "organic"
                        );

                    if (organic) {

                        organic.textContent =
                            data.organic ||
                            translations[
                                currentLanguage
                            ].organicPending;
                    }


                    // =================================
                    // PREVENTION
                    // =================================

                    const prevention =
                        document.getElementById(
                            "prevention"
                        );

                    if (prevention) {

                        prevention.textContent =
                            data.prevention ||
                            translations[
                                currentLanguage
                            ].preventionText;
                    }


                    // =================================
                    // ANALYSIS TIME
                    // =================================

                    const analysisTime =
                        document.getElementById(
                            "analysisTime"
                        );

                    if (analysisTime) {

                        const now = new Date();

                        analysisTime.textContent =
                            now.toLocaleString(
                                currentLanguage === "mr"
                                    ? "mr-IN"
                                    : currentLanguage === "hi"
                                    ? "hi-IN"
                                    : "en-IN",
                                {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric"
                                }
                            );
                    }


                    // =================================
                    // STATUS
                    // =================================

                    const status =
                        document.querySelector(
                            ".status"
                        );

                    if (status) {

                        status.textContent =
                            translations[
                                currentLanguage
                            ].detected;
                    }


                    // =================================
                    // CONFIDENCE PROGRESS
                    // =================================

                    const smallProgress =
                        document.getElementById(
                            "smallProgress"
                        );


                    if (smallProgress) {

                        let score =
                            parseInt(
                                data.confidence
                            ) || 0;


                        score =
                            Math.max(
                                0,
                                Math.min(
                                    100,
                                    score
                                )
                            );


                        smallProgress.style.width =
                            score + "%";
                    }


                    // =================================
                    // SHOW ANOTHER BUTTON
                    // =================================

                    if (anotherBtn) {

                        anotherBtn.style.display =
                            "block";
                    }


                    detectBtn.disabled =
                        false;

                }
                catch (error) {

                    console.error(
                        "AI Analysis Error:",
                        error
                    );


                    alert(
                        "AI analysis failed. Check backend terminal."
                    );


                    detectBtn.disabled =
                        false;
                }
            };


        reader.onerror =
            function () {

                console.error(
                    "FileReader Error"
                );


                alert(
                    "Unable to read image."
                );


                detectBtn.disabled =
                    false;
            };


        reader.readAsDataURL(file);

    }
    catch (error) {

        console.error(
            "Backend Connection Error:",
            error
        );


        alert(
            "Backend connection failed. Make sure server.js is running."
        );


        detectBtn.disabled =
            false;
    }
}


// =====================================================
// ANALYZE ANOTHER IMAGE
// =====================================================

if (anotherBtn) {

    anotherBtn.addEventListener(
        "click",
        function () {

            imageInput.value = "";

            uploadedImage.src = "";

            previewLeaf.src =
                "images/leaf-img.jpeg";


            uploadedImage.style.display =
                "none";

            placeholder.style.display =
                "block";


            document.getElementById(
                "analysisTime"
            ).textContent = "--";

            document.getElementById(
                "cropIdentified"
            ).textContent =
                translations[
                    currentLanguage
                ].cropWaiting;


            document.getElementById(
                "confidence"
            ).textContent =
                "--%";


            document.getElementById(
                "confidenceScore"
            ).textContent =
                "--%";


            document.getElementById(
                "severity"
            ).textContent =
                "--";


            document.getElementById(
                "medicine"
            ).textContent =
                translations[
                    currentLanguage
                ].medicinePending;


            document.getElementById(
                "organic"
            ).textContent =
                translations[
                    currentLanguage
                ].organicPending;


            document.getElementById(
                "prevention"
            ).textContent =
                translations[
                    currentLanguage
                ].preventionText;


            document.getElementById(
                "analysisTime"
            ).textContent =
                translations[
                    currentLanguage
                ].waiting;


            const status =
                document.querySelector(
                    ".status"
                );

            if (status) {

                status.textContent =
                    translations[
                        currentLanguage
                    ].ready;
            }


            const smallProgress =
                document.getElementById(
                    "smallProgress"
                );

            if (smallProgress) {

                smallProgress.style.width =
                    "0%";
            }


            anotherBtn.style.display =
                "none";


            detectBtn.disabled =
                false;
        }
    );
}


// =====================================================
// DOWNLOAD PDF REPORT - UNICODE SUPPORT
// English + Marathi + Hindi
// =====================================================

// Convert TTF file to Base64
async function loadFontAsBase64(url) {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Unable to load Devanagari font");
    }

    const buffer = await response.arrayBuffer();

    const bytes = new Uint8Array(buffer);

    let binary = "";

    const chunkSize = 0x8000;

    for (let i = 0; i < bytes.length; i += chunkSize) {

        const chunk =
            bytes.subarray(
                i,
                Math.min(i + chunkSize, bytes.length)
            );

        binary += String.fromCharCode(...chunk);
    }

    return btoa(binary);
}
// =====================================================
// DOWNLOAD PDF REPORT
// Marathi + Hindi + English
// =====================================================

const downloadBtn =
    document.getElementById("downloadBtn");

if (downloadBtn) {

    downloadBtn.addEventListener("click", async function () {

        try {

            if (
                typeof window.jspdf === "undefined" ||
                typeof html2canvas === "undefined"
            ) {
                alert("PDF library not loaded.");
                return;
            }

            const { jsPDF } = window.jspdf;

            // Get result information
            const disease =
                document.getElementById("diseaseName")?.innerText || "--";

            const confidence =
                document.getElementById("confidence")?.innerText || "--";

            const severity =
                document.getElementById("severity")?.innerText || "--";

            const medicine =
                document.getElementById("medicine")?.innerText || "--";

            const organic =
                document.getElementById("organic")?.innerText || "--";

            const prevention =
                document.getElementById("prevention")?.innerText || "--";


            // Create temporary report
            const report = document.createElement("div");

            report.style.position = "absolute";
            report.style.left = "-10000px";
            report.style.top = "0";
            report.style.width = "794px";
            report.style.padding = "45px";
            report.style.background = "white";
            report.style.color = "#222";
            report.style.boxSizing = "border-box";

            // IMPORTANT:
            // Browser will render Marathi/Hindi
            report.style.fontFamily =
                "Arial, 'Noto Sans Devanagari', sans-serif";


            // Language
            let title = "AI Crop Disease Report";
            let diseaseTitle = "Disease";
            let confidenceTitle = "Confidence";
            let severityTitle = "Severity";
            let medicineTitle = "Medicine";
            let organicTitle = "Organic Treatment";
            let preventionTitle = "Prevention";
            let cropTitle = "Crop Image";


            if (currentLanguage === "mr") {

                title = "AI पीक रोग निदान रिपोर्ट";
                diseaseTitle = "रोग";
                confidenceTitle = "विश्वास पातळी";
                severityTitle = "रोगाची तीव्रता";
                medicineTitle = "औषध";
                organicTitle = "सेंद्रिय उपचार";
                preventionTitle = "प्रतिबंधात्मक उपाय";
                cropTitle = "पिकाचा फोटो";
            }


            if (currentLanguage === "hi") {

                title = "AI फसल रोग निदान रिपोर्ट";
                diseaseTitle = "रोग";
                confidenceTitle = "विश्वास स्तर";
                severityTitle = "रोग की गंभीरता";
                medicineTitle = "दवा";
                organicTitle = "जैविक उपचार";
                preventionTitle = "बचाव के सुझाव";
                cropTitle = "फसल की तस्वीर";
            }


            // Crop image
            let imageHTML = "";

            if (
                uploadedImage &&
                uploadedImage.src &&
                uploadedImage.src.startsWith("data:image/")
            ) {

                imageHTML = `
                    <img
                        src="${uploadedImage.src}"
                        style="
                            width:180px;
                            height:180px;
                            object-fit:cover;
                            border-radius:12px;
                            margin-top:10px;
                        "
                    >
                `;
            }


            // Report content
            report.innerHTML = `

                <div style="
                    font-size:28px;
                    font-weight:bold;
                    margin-bottom:30px;
                    padding-bottom:15px;
                    border-bottom:2px solid #ddd;
                ">
                    ${title}
                </div>


                <div style="
                    font-size:20px;
                    font-weight:bold;
                    margin-top:20px;
                ">
                    🦠 ${diseaseTitle}
                </div>

                <div style="
                    font-size:17px;
                    margin-top:8px;
                    margin-bottom:20px;
                    line-height:1.8;
                ">
                    ${disease}
                </div>


                <div style="
                    font-size:20px;
                    font-weight:bold;
                ">
                    📊 ${confidenceTitle}
                </div>

                <div style="
                    font-size:17px;
                    margin-top:8px;
                    margin-bottom:20px;
                ">
                    ${confidence}
                </div>


                <div style="
                    font-size:20px;
                    font-weight:bold;
                ">
                    ⚡ ${severityTitle}
                </div>

                <div style="
                    font-size:17px;
                    margin-top:8px;
                    margin-bottom:20px;
                    line-height:1.8;
                ">
                    ${severity}
                </div>


                <div style="
                    font-size:20px;
                    font-weight:bold;
                ">
                    💊 ${medicineTitle}
                </div>

                <div style="
                    font-size:17px;
                    margin-top:8px;
                    margin-bottom:20px;
                    line-height:1.8;
                ">
                    ${medicine}
                </div>


                <div style="
                    font-size:20px;
                    font-weight:bold;
                ">
                    🌱 ${organicTitle}
                </div>

                <div style="
                    font-size:17px;
                    margin-top:8px;
                    margin-bottom:20px;
                    line-height:1.8;
                ">
                    ${organic}
                </div>


                <div style="
                    font-size:20px;
                    font-weight:bold;
                ">
                    🛡 ${preventionTitle}
                </div>

                <div style="
                    font-size:17px;
                    margin-top:8px;
                    margin-bottom:25px;
                    line-height:1.8;
                ">
                    ${prevention}
                </div>


                <div style="
                    font-size:20px;
                    font-weight:bold;
                ">
                    🌿 ${cropTitle}
                </div>

                ${imageHTML}

            `;


            document.body.appendChild(report);


            // Give browser time to render Devanagari
            await new Promise(resolve =>
                setTimeout(resolve, 500)
            );


            // Convert rendered HTML to image
            const canvas =
                await html2canvas(report, {
                    scale: 2,
                    backgroundColor: "#ffffff"
                });


            const imgData =
                canvas.toDataURL("image/png");


            // Create PDF
            const pdf =
                new jsPDF("p", "mm", "a4");


            const pageWidth = 210;
            const pageHeight = 297;
            const margin = 10;

            const imgWidth =
                pageWidth - (margin * 2);

            const imgHeight =
                canvas.height *
                imgWidth /
                canvas.width;


            let heightLeft = imgHeight;
            let position = margin;


            pdf.addImage(
                imgData,
                "PNG",
                margin,
                position,
                imgWidth,
                imgHeight
            );


            heightLeft -=
                pageHeight - (margin * 2);


            while (heightLeft > 0) {

                position =
                    heightLeft -
                    imgHeight +
                    margin;

                pdf.addPage();

                pdf.addImage(
                    imgData,
                    "PNG",
                    margin,
                    position,
                    imgWidth,
                    imgHeight
                );

                heightLeft -=
                    pageHeight - (margin * 2);
            }


            pdf.save(
                "Crop_Disease_Report.pdf"
            );


            // Remove temporary report
            document.body.removeChild(report);


        }
        catch (error) {

            console.error(
                "PDF Error:",
                error
            );

            alert(
                "PDF तयार करताना समस्या आली."
            );
        }

    });
}