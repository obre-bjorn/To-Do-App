import { createStorage,saveProject } from "./modules/storage.js";
import { ToDoList } from "./modules/toDoList.js";
import { addProject as ad } from "./modules/UI.js";


let list = new ToDoList()



createStorage(list)


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
        // console.log(projectData);
    list.addProject(projectData.value)
    addProj.reset()
})


// * View add task form
let addTaskBtn = document.getElementById('add-task')
addTaskBtn.addEventListener('click', function(e) {
    let overlay = document.querySelector('.overlay')

    overlay.classList.add('active')
})
let cancelOverlay = document.querySelector('#cancel')

cancelOverlay.addEventListener('click', function(e) {
    let overlay = document.querySelector('.overlay')
    overlay.classList.remove('active')
})



// ADD TASK FORM
let addTask = document.getElementById("add-task-form")

addTask.addEventListener('submit', function(e) {
    e.preventDefault()


    // ^ Get Form data

    const taskData = new FormData(addTask)
    let taskDataObject = Object.fromEntries(taskData.entries())

    // ^
    let activeProject = document.querySelector('.project.active')
    let project = getItemById(activeProject, 'project')
    project.projectData.addTask(project.id, taskDataObject.taskname, taskDataObject.duedate,false)

    addTask.reset()


})

// ^ Remove Project Element
export function deleteProject(e){
    e.stopPropagation()
    let projElement = e.target.parentElement
    let projectData =  getItemById(projElement,'project')
    projElement.parentNode.removeChild(projElement)
    list.deleteProject(projectData.projectData.id)
}


export function deleteTask(e){
    e.stopPropagation()

    //^ GET PROJECT TO DELETE FROM
    let getProject = document.querySelector('.project.active')
    let projectData = getItemById(getProject,'project')

    //^ GET TASK TO BE DELETED
    let taskElement = e.target.parentElement
    let taskId = getItemById(taskElement,'task')

    taskElement.parentNode.removeChild(taskElement)
    list.getProject(projectData.id).deleteTask(taskId)
    console.log(list)
    

}





// TODO : Change module location 


export function getItemById(element, item) {


    // TODO: CHANGE TO USE SWITCH & CASE -------------

    if (item == "project") {
        let projectId = element.id.split('project')[1]
        let data = list.getProjects()
        let projectData = data.find(proj => proj.id === parseInt(projectId))
        return { id: projectId, projectData: projectData }
    } else if(item === "task"){
        let taskId = element.id.split('task')[1]
        return taskId
    }



}

// list.addProject("Laundry")