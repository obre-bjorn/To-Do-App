import ToDo from "./todo.js";
import { saveProject } from "./storage.js";

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

    addTask(description, dueDate) {
        let toDo = new ToDo(description, dueDate);
        this.todoList.push(toDo)
            // saveProject(toDo)
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