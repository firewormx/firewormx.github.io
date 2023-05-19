import {convertKMtoMiles} from "./converter_km.js"

const kmInput = document.querySelector("#km-input")
const milesOutput = document.querySelector("#miles-output")

kmInput.addEventListener("keyup", () => {
    milesOutput.value = convertKMtoMiles(kmInput.value)
})