import {getMessage} from "./message.js";

let itemsCount = document.querySelector("#items-count");

function renderMessage() {
    let value = Number.parseInt(itemsCount.value, 10)
    let message = getMessage(value)
    document.querySelector("#message").textContent = message
}

document.querySelector("#add-item").addEventListener("click", function() {
    itemsCount.value = Number.parseInt(itemsCount.value, 10) + 1;
    renderMessage();
});

document.querySelector("#sub-item").addEventListener("click", function () {
    itemsCount.value = Number.parseInt(itemsCount.value, 10) - 1;
    renderMessage();
});

// the first time the page loads
renderMessage();