
export default class Weather{

    constructor(data){
        this.temp = data.main.temp
    }
    
    get Template(){
        return /*html */`
        ${this.temp}K
        `
    }

}