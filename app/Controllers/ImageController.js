import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";


function _draw(){
    let image = ProxyState.wallpaper
    document.body.style.backgroundImage = `url(${image.url})`
}


export default class ImageController{
    constructor(){
        imageService.getImage()
        ProxyState.on("wallpaper", _draw)
    }
}