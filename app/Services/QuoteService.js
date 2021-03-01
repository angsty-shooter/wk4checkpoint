import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { api } from "./AxiosService.js";


class QuoteService{

    async getQuote(){
        try {
            const qu = await api.get("quotes")
            ProxyState.quotes = new Quote(qu.data)
        } catch (error) {
            console.log(error)
        }
        
    }
}

export const quoteService = new QuoteService()