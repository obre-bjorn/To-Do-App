import { getData } from "./storage";


function eventListeners() {





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

function displayTask(element) {
    let storageData = getData()
    let dataAvailable = storageData.find(proj => proj.id === element.target.id)
    let taskContainer = document.getElementById('task-container')
    console.log(element.target.id.split('project'))
        // dataAvailable.todoList.forEach(tasks => {

    // });


}


export { eventListeners, displayTask, addProject }