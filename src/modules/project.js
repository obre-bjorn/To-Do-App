import ToDo from "./todo.js";
import { saveProject, saveTask } from "./storage.js";
import { addTask as addTaskUI } from "./UI.js";

export class Project {

    constructor(id, title) {
        this.id = id
        this.title = title
        this.todoList = []
    }


    getProjectInfo() {
        return {
            id: this.id,
            title: this.title,
            tasks: this.todoList
        }
    }

    addTask(projectId, description, dueDate) {
        let toDo = new ToDo(description, dueDate);
        this.todoList.push(toDo)
        addTaskUI(this.id, description, dueDate, false)
        saveTask(projectId, toDo)
        this.id++
    }


    getTasks() {
        return this.todoList
    }

}

// let Projecta = new Project('Coding')

// Projecta.addToDo('Start Coding HTML', new Date())
// Projecta.addToDo('Start Coding CSS', new Date())
// console.log(Projecta.title);
// console.log(Projecta.getAllToDo())