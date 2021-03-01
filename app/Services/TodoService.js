import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todos.js";
import { doApi } from "./AxiosService.js";


class TodoService {

    async getTask(){
        try{
          const res = await doApi.get('tasks')
          ProxyState.tasks = res.data.map(rawTaskData => new Todo(rawTaskData))
        } catch (error) {
          console.error(error)
        }
      }
      
    async createTask(rawTask){
        try {
            const res = await doApi.post('tasks', rawTask)
            ProxyState.tasks = [...ProxyState.tasks, new Todo(res.data)]
        } catch (error) {
            console.error(error)
        }
    }

    async deleteCar(id) {
        try{
          const res = await doApi.delete(`tasks/${id}`)
          this.getTask()
        } catch (error) {
          console.error(error)
        }
      }
}

export const todoService = new TodoService()