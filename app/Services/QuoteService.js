import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";


class QuoteService{

    constructor(){

    }

    async getQuote(){
        try {
            const qu = await api.get("quotes")
            ProxyState.quotes = qu.data
        } catch (error) {
            console.log(error)
        }
        
    }
}

export const quoteService = new QuoteService()