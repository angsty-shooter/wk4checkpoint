import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";


class ImageService{
    constructor(){

    }

    async getImage(){
        try {
            const res = await api.get("images")
            ProxyState.wallpaper = res.data
        } catch (error) {
            console.log(error)
        }
        
    }
    
}

export const imageService = new ImageService()