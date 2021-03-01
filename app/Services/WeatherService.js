import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService{

    async getWeather(){
        try {
            const wet = await api.get("weather")
            ProxyState.weather = new Weather(wet.data)
        } catch (error) {
            console.log(error)
        }
        
    }
}

export const weatherService = new WeatherService()