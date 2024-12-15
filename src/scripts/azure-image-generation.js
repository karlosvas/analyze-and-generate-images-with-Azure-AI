import { AzureOpenAI } from "openai";

async function generateImage(prompt) {
    // You will need to set these environment variables or edit the following values
    const endpoint = import.meta.env.VITE_AZURE_OPENAI_ENDPOINT;
    const apiKey = import.meta.env.VITE_AZURE_OPENAI_KEY;

    // The size of the generated image
    const size = "1024x1024";
    // The number of images to generate
    const n = 1;
    const deployment = "dall-e-3";
    const apiVersion = "2024-04-01-preview";

    const client = new AzureOpenAI({
        apiKey,
        endpoint,
        deployment,
        apiVersion,
        dangerouslyAllowBrowser: true
    });
    try {
        return await client.images.generate({ prompt, model: "", n, size });
    } catch (error) {
        console.error('Error generating image:', error);
        throw new Error(error.message);
    }
}

export { generateImage };