import ToDo from "./todo.js";
import { saveProject, saveTask } from "./storage.js";
import { addTask as addTaskUI } from "./UI.js";

export class Project {

    constructor(id, title) {
        this.id = id
        this.title = title
        this.todoList = []
        this.taskId = 0
    }


    getProjectInfo() {
        return {
            id: this.id,
            title: this.title,
            tasks: this.todoList
        }
    }

    getTasks() {
        return this.todoList
    }


    addTask(projectId,description, dueDate,available) {
        let toDo = new ToDo(this.taskId,description, dueDate);
        this.todoList.push(toDo)
        
        if(!available){
            addTaskUI(`task${this.taskId}`, description, dueDate)
            saveTask(projectId, toDo)
        }

        this.taskId++
        
    }

    deleteTask(){
        
    }


}

// let Projecta = new Project('Coding')

// Projecta.addToDo('Start Coding HTML', new Date())
// Projecta.addToDo('Start Coding CSS', new Date())
// console.log(Projecta.title);
// console.log(Projecta.getAllToDo())