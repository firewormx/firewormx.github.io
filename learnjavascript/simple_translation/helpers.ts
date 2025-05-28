import translations from "./simple_translation.js";

export const getTranslation = (language: string) => {
    return translations.welcome[language] ?? "Welcome";
}