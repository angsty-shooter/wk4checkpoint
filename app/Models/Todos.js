import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js";

export default class Todo{

    constructor({title, id = generateId()}){
        this.title = title,
        this.id = id
    }

    get Template(){
        return /*html*/`
        <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.carsController.deleteTask('${this.id}')" aria-hidden="true"></i>
        <i class="fa fa-check fa-2x text-danger d-flex align-self-end pointer" onclick="app.carsController.checkTask('${this.id}')" aria-hidden="true"></i>
        `
    }
}