
export default class Quote{
    constructor(data){
        this.quote = data.content
        this.author = data.author
    }

    get Template(){
        return /*html */`
        <h4>${this.quote} - ${this.author}</h4>
        `
    }
}