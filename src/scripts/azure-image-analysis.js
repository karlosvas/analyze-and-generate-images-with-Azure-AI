import createClient from "@azure-rest/ai-vision-image-analysis";
import { AzureKeyCredential } from "@azure/core-auth";
import { setLogLevel, AzureLogger } from "@azure/logger";

// Configura el nivel de registro
setLogLevel("info");

// Asegúrate de que los mensajes de registro se impriman en la consola
AzureLogger.log = (...args) => {
    console.log(...args);
};

async function analyzeImage(imageUrl, options) {
    const endpoint = import.meta.env.VITE_VISION_ENDPOINT;
    const key = import.meta.env.VITE_VISION_KEY;

    const credential = new AzureKeyCredential(key);
    const client = createClient(endpoint, credential)
    try {
        const res = await client.path('/imageanalysis:analyze').post({
            body: {
                url: imageUrl
            },
            queryParameters: {
                features: options.features,
                language: options.language,
                'smartCrops-aspect-ratios': [0.9, 1.33]
            },
            contentType: 'application/json'
        });
        return res.body;
    } catch (error) {
        throw new Error(`Error at analyzeImage: ${error.message}`);
    }
}

export { analyzeImage };