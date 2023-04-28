import { createStorage } from "./modules/storage.js";
import { ToDoList } from "./modules/toDoList.js";
import { addProject as ad } from "./modules/UI.js";


let list = new ToDoList()


createStorage(list)

console.log(list)

let storage = JSON.parse(localStorage.getItem('toDoList'))
    // console.log(storage)

// let projectContainer = document.getElementById('projects')

// storage.forEach(element => {

//     console.log(element)
//         // let project = element.getProjectInfo()
//     list.addProject(element.id, element.title)
// });

let addProj = document.getElementById('addProject')

addProj.addEventListener('submit', function(e) {
    let projectData = document.getElementById('projectName')
    list.addProject(projectData.value)
    e.preventDefault()
    addProj.reset()
})

// list.addProject("Laundry")