import {isPasswordValid} from "./password.js"

const password = document.querySelector("#register-password")

password.addEventListener("keyup", () => {
    let result = isPasswordValid(password.value)
    if (result) {
        password.classList.remove("error")
    } else {
        password.classList.add("error")
    }
})