import { ProxyState } from "../AppState.js";
import { weatherService } from "../Services/WeatherService.js";


function _draw(){
    document.getElementById("weatherDisplay").innerHTML = `${ProxyState.weather.Template}`
}


export default class WeatherController{

    constructor(){
        weatherService.getWeather()
        ProxyState.on("weather", _draw)
    }
}