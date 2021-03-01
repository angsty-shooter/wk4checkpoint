import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService{

    async getWeather(){
        try {
            const wet = await api.get("weather")
            console.log(wet)
            ProxyState.quotes = new Weather(wet.data)
        } catch (error) {
            console.log(error)
        }
        
    }
}

export const weatherService = new WeatherService()