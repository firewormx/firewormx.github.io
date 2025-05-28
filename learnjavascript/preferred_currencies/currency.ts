export const getSelectedCurrencies = () => {
    const activeCards = Array.from(document.querySelectorAll<HTMLDivElement>(".cards .card.active"));
    return activeCards.map(card => card.textContent ?? "");
};