import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";


function _draw(){

}


export default class QuoteController{

    constructor(){
        quoteService.getQuote()
        ProxyState.on("quotes", _draw)
    }
}