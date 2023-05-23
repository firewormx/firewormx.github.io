export default class Weather {
    /** @param {object} details */
constructor(details){
this.details = details;
  console.log(this.details);
console.log(this.details.location);
}

getLocation(){
 return `${this.details.location.name}, ${this.details.location.country}`
}

getIcon(){
console.log(this.details.current);
console.log(this.details.current.weather_icons);
return this.details.current.weather_icons;
}
getTemperature(){
console.log(this.details.current.temperature);
return this.details.current.temperature + "&deg;C";
}
}