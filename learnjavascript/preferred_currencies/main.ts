import { getSelectedCurrencies } from "./currency";

const cards = document.querySelectorAll<HTMLDivElement>(".cards .card");
cards.forEach(card => {
    card.addEventListener("click", event => {
        (event.currentTarget as HTMLElement).classList.toggle("active");
        console.log(getSelectedCurrencies());
    });
});

const cards_m = document.querySelectorAll<HTMLDivElement>(".cards_m .card_m");
cards_m.forEach(card_m => {
    card_m.addEventListener("click", event => {
        document.querySelector(".cards_m .card_m.active")?.classList.remove("active");
        (event.currentTarget as HTMLElement).classList.add("active");
    });
});

