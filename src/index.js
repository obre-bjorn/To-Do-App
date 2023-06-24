import { createStorage,saveProject } from "./modules/storage.js";
import { ToDoList } from "./modules/toDoList.js";
import { addProject as ad,setActiveTask,clearContainer,TaskView } from "./modules/UI.js";
import { getISOWeekYear } from "date-fns";


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
let cancelOverlay = document.querySelector('#cancel_add_task')

cancelOverlay.addEventListener('click', function(e) {
    let overlay = document.querySelector('.overlay')
    overlay.classList.remove('active')
})



// ADD TASK FORM
let addTask = document.getElementById("add-task-form")

addTask.addEventListener('submit', function(e) {
    e.preventDefault()

    let overlay = document.querySelector('.overlay')
    // ^ Get Form data

    const taskData = new FormData(addTask)
    let taskDataObject = Object.fromEntries(taskData.entries())

    // ^
    let activeProject = document.querySelector('.project.active')
    let project = getItemById(activeProject, 'project')
    project.projectData.addTask
        (
            project.id, taskDataObject.taskname, 
            taskDataObject.description,taskDataObject.priority,
            taskDataObject.duedate,false
        )

    addTask.reset()
    overlay.classList.remove('active')


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
    // let getProject = document.querySelector('.project.active')
    // let projectData = getItemById(getProject,'project')

    //^ GET TASK TO BE DELETED
    let taskElement = e.target.parentElement.parentElement
    let taskId = parseInt(taskElement.dataset.taskId)
    let projectId = parseInt(taskElement.dataset.projectId)

    console.log(projectId)
    // let taskId = getItemById(taskElement,'task')

    taskElement.parentNode.removeChild(taskElement)
    let project = list.getProject(projectId)
    project.deleteTask(projectId,taskId)
    console.log(list)
    

}


export function getList(){
    return list
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


//  ^ Menu display
let menu = [...document.querySelectorAll('.menu')]

menu.forEach(button =>  { 
    button.addEventListener('click',displayMenuTask)
}

 )


 function displayMenuTask(element){
    let taskContainer = document.getElementById('task-container')
    let elementTarget = element.target
    
    let addTask = document.getElementById("add-task")
    addTask.style.display = "none"
    // console.log(elementTarget.id)
    if(elementTarget.id === "home"){
        if (elementTarget.classList.contains('active')){
            return 
        };
        setActiveTask(element)
        clearContainer(taskContainer)
        let todos = list.getAllTasks()
        console.log(todos)
        todos.forEach(todo =>{
            let projId = todo.projId 
             todo = todo.taskdetail
            TaskView(projId,todo.id,todo.title,todo.description,todo.priority,todo.dueDate)
        })

    }
     if(elementTarget.id === "today"){
        if (elementTarget.classList.contains('active')){
            return 
        };
        setActiveTask(element)
        clearContainer(taskContainer)
        let todos = list.getTodayTasks()
        console.log(todos)
        todos.forEach(todo=>{
           let projId = todo.projId 
             todo = todo.taskdetail
            TaskView(projId,todo.id,todo.title,todo.description,todo.priority,todo.dueDate)
        })

    }
    if(elementTarget.id === "thisweek"){
        if (elementTarget.classList.contains('active')){
            return 
        };
        let week = getISOWeekYear(new Date())
        setActiveTask(element)
        clearContainer(taskContainer)
        let todos = list.getWeekTasks(week)
        console.log(todos)
        todos.forEach(todo=>{
            let projId = todo.projId 
            todo = todo.taskdetail
            TaskView(projId,todo.id,todo.title,todo.description,todo.priority,todo.dueDate)
        })


    }

    
 }


// list.addProject("Laundry")