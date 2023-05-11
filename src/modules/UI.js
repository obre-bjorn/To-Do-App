import { getData } from "./storage";


// ! TO CHANGE!!
import { getItemById } from "../index";


function eventListeners() {

}


function clearContainer(container) {
    container.innerHTML = ""
}





function addProject(id, title) {
    let projectContainer = document.getElementById('projects')
        // let project = document.querySelector('.project')

    // projectContainer.appendChild(project)
    const projectView = `<div id=${id} class="project">
    <span>${title}</span>
    <i class="fa-solid fa-trash delete-project"></i>
    </div>`
    projectContainer.insertAdjacentHTML('beforeend', projectView)
        // project.addEventListener('click', displayToDos)

    let project = projectContainer.querySelector(`#${id}`)
    project.addEventListener('click', displayTask)
        // }
        // console.log(project)
}


function addTask(id, taskname, duedate, important) {
    let taskContainer = document.getElementById('task-container')

    let taskView = `<div id="${id}" class="task">
                        <input type="checkbox" name="completed" id="" class="task-done"><span class="task-name">${taskname}</span><i class="fa-solid fa-star important active"></i>
                    </div>`
    taskContainer.insertAdjacentHTML('beforeend', taskView)

}

function displayTask(element) {


    //Set active Button

    let taskContainer = document.getElementById('task-container')
        // let projectData = getItemDataById(element, "project")


    // console.log(projectData)
    // dataAvailable.todoList.forEach(tasks => {

    // });
    if (element.target.classList.contains('active')) {
        return
    }


    setActiveTask(element)
    clearContainer(taskContainer)
    let activeProject = document.querySelector('.project.active')
    let project = getItemById(activeProject, 'project')
    let data = project.projectData

    let tasks = data.getTasks()

    if (!tasks.length) {

        let noTasksHTML = ` <h3>No tasks available. Click the (+) button below to add tasks</h3>`
        taskContainer.insertAdjacentHTML("beforeend", noTasksHTML)
    } else {
        tasks.forEach((task) =>{
            console.log(task)
            let taskHTML = `<div id="${task.id}" class="task">
                        <input type="checkbox" name="completed" id="" class="task-done"><span class="task-name">${task.description}</span><i class="fa-solid fa-star important active"></i>
                    </div>`
        taskContainer.insertAdjacentHTML("beforeend",taskHTML)})
    
    }


}

function setActiveTask(proj) {
    let projects = [...document.querySelectorAll('.project')]

    projects.forEach((project) => {
        if (project != this) {
            project.classList.remove('active')

        }
    })

    proj.target.classList.add('active')

}



export { eventListeners, displayTask, addProject, addTask }