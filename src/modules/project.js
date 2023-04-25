import ToDo from "./todo.js";
import { saveProject } from "./storage.js";

export class Project {
    constructor(title) {
        this.title = title
        this.todoList = []
    }

    addToDo(description, dueDate) {
        let toDo = new ToDo(description, dueDate);
        this.todoList.push(toDo)
            // saveProject(toDo)
    }


    getAllToDo() {
        return this.todoList
    }

}

// let Projecta = new Project('Coding')

// Projecta.addToDo('Start Coding HTML', new Date())
// Projecta.addToDo('Start Coding CSS', new Date())
// console.log(Projecta.title);
// console.log(Projecta.getAllToDo())