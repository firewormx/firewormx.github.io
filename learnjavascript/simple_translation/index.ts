import {getTranslation} from "./helpers.js"

const outPutText= document.querySelector("#output-text") as HTMLElement;
const dropDown= document.querySelector("#languages-list") as HTMLSelectElement;

dropDown.addEventListener("change",()=>{
outPutText.textContent= getTranslation(dropDown.value);
})