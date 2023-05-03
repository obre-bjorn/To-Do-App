import { getData } from "./storage";


function eventListeners() {





}

function getItemDataById(element, item) {
    let storageData = getData()


    // TO DO: CHANGE TO USE SWITCH & CASE -------------

    if (item === "project") {
        let projectId = element.target.id.split('project')[1]
        return storageData.find(proj => proj.id === parseInt(projectId))
    } else {

    }


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


function addTask() {

}

function displayTask(element) {


    //Set active Button

    let taskContainer = document.getElementById('task-container')
    let dataAvailable = getItemDataById(element, 'project')


    console.log(dataAvailable)
        // dataAvailable.todoList.forEach(tasks => {

    // });
    if (element.target.classList.contains('active')) {
        return
    }

    setActiveTask(element)





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



export { eventListeners, displayTask, addProject }