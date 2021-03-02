import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todos.js";
import { doApi } from "./AxiosService.js";


class TodoService {

    async getTask(){
        try{
          const res = await doApi.get()
          ProxyState.tasks = res.data.map(rawTaskData => new Todo(rawTaskData))
        } catch (error) {
          console.error(error)
        }
      }
      
    async createTask(rawTask){
        try {
            const res = await doApi.post('', rawTask)
            ProxyState.tasks = [...ProxyState.tasks, new Todo(res.data)]
        } catch (error) {
            console.error(error)
        }
    }

    async deleteTask(_id) {
        try{
          await doApi.delete(`${_id}`)
          this.getTask()
        } catch (error) {
          console.error(error)
        }
      }

      async checkTask(_id) {
          try {
              const res = await doApi.put()
              
          } catch (error) {
              
          }
      }
}

export const todoService = new TodoService()