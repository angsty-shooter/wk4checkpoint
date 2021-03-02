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

    async deleteTask(id) {
      debugger
        try{
          const res = await doApi.delete(`${id}`)
          this.getTask()
          //console.log(this.getTask)
        } catch (error) {
          console.error(error)
        }
      }

      async checkTask(id) {
          try {
              const res = await doApi.put()
              
          } catch (error) {
              
          }
      }
}

export const todoService = new TodoService()