export default class WeatherCities {
    /** @param {array[]} cities */
constructor(cities){
this.cities = cities;
console.log(cities);
}
getFirst(){
return this.cities[0];

}
getLast(){
return this.cities[this.cities.length -1];
}

exportCsv(){
return this.cities.map(function(city){
    return city.location.name + " " + city.current.temperature
}).join(", ");
}
}