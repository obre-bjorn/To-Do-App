import { getData } from "./storage";

export function addProject(title) {
    let projectContainer = document.getElementById('projects')

    let project = document.createElement('button');
    project.textContent = title
    project.classList.add('project')
    project.addEventListener('click', displayToDos)
    projectContainer.appendChild(project)

}

function displayToDos(element) {
    let project = this.textContent
    let storageData = getData()
    let dataAvailable = storageData.find(proj => proj.title === project)
    let taskContainer = document.getElementById('task-container')

    // dataAvailable.todoList.forEach(tasks => {


    // });


}