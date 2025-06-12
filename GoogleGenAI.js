import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: "Hola, soy Italo Fabio Sinisi Q.FULL-STACK DEV & DATA ANALYST Data Analyst con experiencia en Python, SQL, Power BI, Cloud (AWS/GCP) y APIs REST. Desarrollo dashboards, modelos predictivos y pipelines ETL para diversos sectores. Conocimientos en Linux, ciberseguridad y desarrollo web.",
    generationConfig: {
      maxOutputTokens: 100, // Limita la respuesta a ~100 tokens (aproximadamente 75-100 caracteres)
      temperature: 0.7, // Controla la creatividad (0 = preciso, 1 = creativo)
      topP: 0.9 // Controla la diversidad de respuestas


    
  } });
  console.log(response.text);
}

main();