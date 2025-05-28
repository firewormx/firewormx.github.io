import translations from "./simple_translation.js";

export const getTranslation = (language) => {
    return translations.welcome[language] ?? "Welcome";
}