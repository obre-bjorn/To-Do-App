import { getData } from "./storage";

export function addProject(id, title) {
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
    console.log(project)
    project.addEventListener('click', displayToDos)
        // }
        // console.log(project)
}

function displayToDos(element) {
    let storageData = getData()
    let dataAvailable = storageData.find(proj => proj.id === element.target.id)
    let taskContainer = document.getElementById('task-container')
    console.log(element.target.id)
        // dataAvailable.todoList.forEach(tasks => {


    // });


}