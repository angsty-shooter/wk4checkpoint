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
        <div>${this.description}<i class="fa fa-trash text-danger d-flex align-self-end pointer" onclick="app.todoController.deleteTask('${this._id}')" aria-hidden="true"></i>
        </div>
        `
    }
}