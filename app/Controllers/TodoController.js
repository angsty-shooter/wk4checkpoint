import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";


function _draw(){
    let task = ProxyState.tasks
    let template = ""
    task.forEach(t=> template += t.Template)
    // console.log(template)
    document.getElementById('taskRow').innerHTML = template
}

export default class TodoController{

    constructor(){
        _draw()
        ProxyState.on("tasks", _draw)
    }

    createTask(event){
        event.preventDefault();
        console.log('creating task')
        let form = event.target
        console.log(form)
        
        let rawTask = {
          title: form.title.value,
        }
        console.log(rawTask)
        todoService.createTask(rawTask)
      }

    //   deleteTask(id){
    //     console.log(id)
    //     todoService.deleteTask(id)
}