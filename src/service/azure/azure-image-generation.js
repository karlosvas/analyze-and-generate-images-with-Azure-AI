import { AzureOpenAI } from "openai";

// Generamos una imagen basado en el texto dado
async function generateImage(prompt) {
    // Necesitarás configurar estas variables de entorno o editar los siguientes valores
    const endpoint = import.meta.env.VITE_AZURE_OPENAI_ENDPOINT;
    const apiKey = import.meta.env.VITE_AZURE_OPENAI_KEY;

    // Tamaño de la imagen a generar
    const size = "1024x1024";
    // El número de imágenes a generar
    const n = 1;
    const deployment = "dall-e-3";
    const apiVersion = "2024-04-01-preview";

    // Creamos una instancia del cliente de Azure OpenAI
    const client = new AzureOpenAI({
        apiKey,
        endpoint,
        deployment,
        apiVersion,
        dangerouslyAllowBrowser: true
    });
    // Generamos la imagen usando el cliente de Azure OpenAI
    try {
        return await client.images.generate({ prompt, model: "", n, size });
    } catch (error) {
        console.error('Error generating image:', error);
        throw new Error(error.message);
    }
}

export { generateImage };