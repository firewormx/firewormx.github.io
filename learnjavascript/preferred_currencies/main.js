"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var currency_ts_1 = require("./currency.js");
var cards = document.querySelectorAll(".cards .card");
cards.forEach(function (card) {
    card.addEventListener("click", function (event) {
        event.currentTarget.classList.toggle("active");
        console.log((0, currency_ts_1.getSelectedCurrencies)());
    });
});
var cards_m = document.querySelectorAll(".cards_m .card_m");
cards_m.forEach(function (card_m) {
    card_m.addEventListener("click", function (event) {
        var _a;
        (_a = document.querySelector(".cards_m .card_m.active")) === null || _a === void 0 ? void 0 : _a.classList.remove("active");
        event.currentTarget.classList.add("active");
    });
});
