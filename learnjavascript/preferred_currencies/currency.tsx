//@ts-check
export const getSelectedCurrencies = () => {
    const activeCard= [...document.querySelectorAll(".cards .card.active")]
     return activeCard.map(activeCard=> activeCard.textContent);
    }