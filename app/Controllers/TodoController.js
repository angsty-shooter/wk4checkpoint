import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";


function _draw(){
    let task = ProxyState.tasks
    let template = ""
    task.forEach(t=> template += t.Template)
    //console.log(template)
    document.getElementById('taskRow').innerHTML = template
}

export default class TodoController{

    constructor(){
        this.getTask()
        ProxyState.on("tasks", _draw)
        _draw()
    }

    getTask(){
      todoService.getTask()
    }
    createTask(event){
        event.preventDefault();
        let form = event.target
        let rawTask = {
          description: form.taskForm.value,
        }
        todoService.createTask(rawTask)
      }

      deleteTask(_id){
        console.log(_id)
        todoService.deleteTask(_id)
        // this.getTask()
      }
}