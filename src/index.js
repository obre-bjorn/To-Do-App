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


// Set Today project to active



let addProj = document.getElementById("addProject")

addProj.addEventListener("submit", function(e) {
    e.preventDefault()
    let projectData = document.getElementById("projectName")
    console.log(projectData);
    list.addProject(projectData.value)
    addProj.reset()
})

let addTask = document.getElementById("add-task-form")

addTask.addEventListener('submit', function(e) {
    e.preventDefault()
    const taskData = new FormData(addTask)
    console.log(Object.fromEntries(taskData.entries()))


    addTask.reset()

})

// list.addProject("Laundry")