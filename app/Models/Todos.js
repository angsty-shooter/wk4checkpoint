import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js";

export default class Todo{

    constructor({title, id = generateId()}){
        this.title = title,
        this.id = id
    }


}