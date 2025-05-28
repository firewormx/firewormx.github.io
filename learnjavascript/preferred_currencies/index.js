import {getSelectedCurrencies} from "./currency.js";

document.querySelectorAll(".cards .card")
.forEach(card => {
    card.addEventListener("click", event => {
        event.currentTarget.classList.toggle("active");
        console.log(getSelectedCurrencies());
    });
})

const cards_m= document.querySelectorAll(".cards_m .card_m");
cards_m.forEach(card_m =>{
     card_m.addEventListener("click", event=>{
        document.querySelector(".cards_m .card_m.active")?.classList.remove("active");
        event.currentTarget.classList.add("active");
     })
})

