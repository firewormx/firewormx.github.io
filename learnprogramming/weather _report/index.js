import data from "./data.js";
import Weather from "./weather_report.js";

let cityCountry = document.querySelector("#city-country");
let icon = document.querySelector("#icon");
let temperature = document.querySelector("#temperature");

let weather = new Weather(data);

cityCountry.textContent = weather.getLocation();
icon.src = weather.getIcon();
temperature.innerHTML = weather.getTemperature();