import FetchWrapper from "./weather_api.js";

const citiesDropdown = document.querySelector("#cities-dropdown");
const result = document.querySelector("#weather-result");

const API = new FetchWrapper("https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/");

citiesDropdown.addEventListener("change", () => {
    API.get(`weatherstack/${citiesDropdown.value}.json`)
    .then(data => {
        console.log(data.current.temperature)
        const temperature = data.current.temperature;
        const description = data.current.weather_descriptions[0];
        const humidity = data.current.humidity;
        result.textContent = `It's ${temperature} degrees celsius.
        The weather is ${description}.
        The humidity is ${humidity}
        `;
    });
});