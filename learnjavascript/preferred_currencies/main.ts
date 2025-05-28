import {getSelectedCurrencies} from "./currency.ts";

const cards = document.querySelectorAll<HTMLButtonElement>(".cards .card");
cards.forEach(card => {
    card.addEventListener("click", event => {
        (event.currentTarget as HTMLElement).classList.toggle("active");
        console.log(getSelectedCurrencies());
    });
})

const cards_m= document.querySelectorAll<HTMLButtonElement>(".cards_m .card_m");
cards_m.forEach(card_m =>{
     card_m.addEventListener("click", event=>{
        document.querySelector(".cards_m .card_m.active")?.classList.remove("active");
        (event.currentTarget as HTMLElement).classList.add("active");
     })
})

