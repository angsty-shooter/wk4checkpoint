import { ProxyState } from "../AppState.js";
import { quoteService } from "../Services/QuoteService.js";


function _draw(){
    document.getElementById("quoteDisplay").innerHTML = `${ProxyState.quotes.Template}`
}


export default class QuoteController{

    constructor(){
        quoteService.getQuote()
        ProxyState.on("quotes", _draw)
    }
}