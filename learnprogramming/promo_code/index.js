import {isPromoCodeValid} from "./promo_code.js"

const code = document.querySelector("#promo-code")

code.addEventListener("keyup", () => {
    let result = isPromoCodeValid(code.value)
    if (result) {
        code.classList.remove("error")
    } else {
        code.classList.add("error")
    }
})