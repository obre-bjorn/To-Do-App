import { getData } from "./storage";

export function addProject(title) {
    let projectContainer = document.getElementById('projects')
        // let project = document.querySelector('.project')

    // projectContainer.appendChild(project)

    const projectView = `<div class="project">
    <span>${title}</span>
    <i class="fa-solid fa-trash delete-project"></i>
    </div>`

    projectContainer.insertAdjacentHTML('beforeend', projectView)
        // project.addEventListener('click', displayToDos)

}

function displayToDos(element) {
    let project = this.textContent
    let storageData = getData()
    let dataAvailable = storageData.find(proj => proj.title === project)
    let taskContainer = document.getElementById('task-container')

    // dataAvailable.todoList.forEach(tasks => {


    // });


}