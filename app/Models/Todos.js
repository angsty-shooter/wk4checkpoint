import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js";

export default class Todo{

    constructor({description, _id, completed}){
        this.description = description,
        this._id = _id,
        this.completed = completed || false
    }

    get Template(){
        return /*html*/`
        <span>${this.description}</span>
        <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.carsController.deleteTask('${this._id}')" aria-hidden="true"></i>
        <i class="fa fa-check fa-2x text-danger d-flex align-self-end pointer" onclick="app.carsController.checkTask('${this._id}')" aria-hidden="true"></i>
        `
    }
}