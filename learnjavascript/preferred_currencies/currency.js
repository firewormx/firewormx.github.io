export function getSelectedCurrencies() {
    const activeCards = Array.from(document.querySelectorAll(".cards .card.active"));
    return activeCards.map(card => card.textContent ?? "");
}
