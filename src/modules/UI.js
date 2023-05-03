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


function addTask() {
    let taskContainer = document.getElementById('task-container')
    let taskView = `<div class="task">
                    <input type="checkbox" name="" id="" class="task-done"><span class="task-name">Wash the Dishes</span><i class="fa-solid fa-star important active"></i>
                </div>`





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