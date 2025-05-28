import {getTranslation} from "./helpers.js"

const outPutText= document.querySelector("#output-text");
const dropDown= document.querySelector("#languages-list");
dropDown.addEventListener("change",()=>{
outPutText.textContent= getTranslation(dropDown.value);
})