import FetchWrapper from "./fetch_wrapper.js";
const  result =  document.querySelector("#conversion-result");
const base= document.querySelector("#base-currency");
const target= document.querySelector("#target-currency");
const API = new FetchWrapper("https://v6.exchangerate-api.com/v6/9e52cad462c43ce4e9c26f96");

const getConversionRates=()=>{
API.get(`/latest/${base.value}`)
.then(data=>{
 result.textContent = data.conversion_rates[target.value]
});
}

base.addEventListener("change", event=>{
    event.preventDefault();
getConversionRates();
});

target.addEventListener("change", event=>{
    event.preventDefault();
    getConversionRates();
})