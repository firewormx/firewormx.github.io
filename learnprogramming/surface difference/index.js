import calculateDifference from "./surface.js"

const width1 = document.querySelector("#width1")
const length1 = document.querySelector("#length1")
const surface1 = document.querySelector("#surface1")

const width2 = document.querySelector("#width2")
const length2 = document.querySelector("#length2")
const surface2 = document.querySelector("#surface2")

const output = document.querySelector("#output")
const calculate = document.querySelector("#calculate")

calculate.addEventListener("click", () => {
    const firstRectangle = [Number.parseInt(width1.value, 10), Number.parseInt(length1.value)]
    const secondRectangle = [Number.parseInt(width2.value, 10), Number.parseInt(length2.value)]
    output.value = calculateDifference(firstRectangle, secondRectangle)
})

function calculateSurface1() {
    surface1.value = Number.parseInt(width1.value, 10) * Number.parseInt(length1.value, 10)
}

width1.addEventListener("keyup", calculateSurface1)
length1.addEventListener("keyup", calculateSurface1)

function calculateSurface2() {
    surface2.value = Number.parseInt(width2.value, 10) * Number.parseInt(length2.value, 10)
}

width2.addEventListener("keyup", calculateSurface2)
length2.addEventListener("keyup", calculateSurface2)