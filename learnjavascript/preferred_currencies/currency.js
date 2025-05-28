"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSelectedCurrencies = void 0;
var getSelectedCurrencies = function () {
    var activeCards = Array.from(document.querySelectorAll(".cards .card.active"));
    return activeCards.map(function (card) { var _a; return (_a = card.textContent) !== null && _a !== void 0 ? _a : ""; });
};
exports.getSelectedCurrencies = getSelectedCurrencies;
