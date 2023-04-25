import { createStorage } from "./modules/storage.js";
import { ToDoList, toDos } from "./modules/toDoList.js";


let list = new ToDoList()

createStorage(list)




let storage = JSON.parse(localStorage.getItem('toDoList'))
console.log(storage)

let projectContainer = document.getElementById('projects')

storage.forEach(element => {
    let project = document.createElement('button');
    project.textContent = element.title
    projectContainer.appendChild(project)
});

list.addProject("Laundry")