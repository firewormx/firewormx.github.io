import { getSelectedCurrencies } from './currency.js';

const cards = document.querySelectorAll(".cards .card");
cards.forEach(card => {
    card.addEventListener("click", event => {
        event.currentTarget.classList.toggle("active");
        console.log(getSelectedCurrencies());
    });
});

const cards_m = document.querySelectorAll(".cards_m .card_m");
cards_m.forEach(card_m => {
    card_m.addEventListener("click", event => {
        const active = document.querySelector(".cards_m .card_m.active");
        if (active) active.classList.remove("active");
        event.currentTarget.classList.add("active");
    });
});
