export function isConfigured() {
    const requiredEnvVariables = [
        import.meta.env.VITE_VISION_ENDPOINT,
        import.meta.env.VITE_VISION_KEY,
        import.meta.env.VITE_AZURE_OPENAI_ENDPOINT,
        import.meta.env.VITE_AZURE_OPENAI_KEY
    ];

    return requiredEnvVariables.every(variable => variable !== undefined && variable !== '');
}