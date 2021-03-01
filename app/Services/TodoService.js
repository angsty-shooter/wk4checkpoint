import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todos.js";
import { doApi } from "./AxiosService.js";


class TodoService {

    async createTask(rawTask){
        try {
            const res = await doApi.post('tasks', rawTask)
            ProxyState.tasks = [...ProxyState.tasks, new Todo(res.data)]
        } catch (error) {
            console.error(error)
        }
    }
}

export const todoService = new TodoService()