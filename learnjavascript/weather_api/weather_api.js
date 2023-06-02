export const getWeather = city => {
fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/weatherstack/${city}.json`)
.then(response=> response.json())
.then(data=>{
 console.log(data);
 console.log(data.current.temperature);
 showTemperature(data.current.temperature);
})
}

const result = document.querySelector("#result");
const showTemperature = temperature => {
    result.textContent = `It's ${temperature} degrees celsius.`;
}