import {convertCelsiusToFahrenheit} from "./celsius.js"

const cInput = document.querySelector("#c-input")
const fOutput = document.querySelector("#f-output")

cInput.addEventListener("keyup", () => {
    fOutput.value = convertCelsiusToFahrenheit(cInput.value)
})