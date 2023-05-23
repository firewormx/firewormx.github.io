import {run} from "./operations.js"

let input = document.querySelector("#input")
let output = document.querySelector("#output")
let operationDouble = document.querySelector("#operation-double")
let operationTriple = document.querySelector("#operation-triple")

operationDouble.addEventListener("click", () => {
    output.value = run("double", input.value)
})
operationTriple.addEventListener("click", () => {
    output.value = run("triple", input.value)
})