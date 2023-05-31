import { getData } from "./storage";


// ! TO CHANGE!!
import { getItemById,deleteProject, deleteTask } from "../index";




function eventListeners() {

}




function clearContainer(container) {
    container.innerHTML = ""
}





function addProject(id, title) {
    let projectContainer = document.getElementById('projects')
        // let project = document.querySelector('.project')

    // projectContainer.appendChild(project)
    const projectView = `
                        <div id=${id} class="project">${title}
                            <i class="fa-solid fa-trash delete-project"></i>
                        </div>
                        `
    projectContainer.insertAdjacentHTML('beforeend', projectView)
        // project.addEventListener('click', displayToDos)

    let project = projectContainer.querySelector(`#${id}`)
    let deleteproject = projectContainer.querySelector(`#${id}>.delete-project`)
    project.addEventListener('click', displayTasks)
    deleteproject.addEventListener('click',deleteProject)
        // }
        // console.log(project)
}




function addTask(id, taskname, duedate, important) {
    let taskContainer = document.getElementById('task-container')

    let taskView = `<div id="${id}" class="task">
    <input type="checkbox" name="completed" id="" class="task-done"><span class="task-name">${taskname}</span><i class="fa-solid fa-star important active"></i> <i class="fa-solid fa-trash delete-task"></i>                    </div>`
    taskContainer.insertAdjacentHTML('beforeend', taskView)

    let deleteTaskBtn = document.querySelector(`#${id}>.delete-task`)
    deleteTaskBtn.addEventListener('click',deleteTask)

    let completeTask = document.querySelector(`#${id}>input[type="checkbox"]`)
    completeTask.addEventListener('checked',(e)=>{
        console.log(e)
    })
}




function displayTasks(element) {
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
                    let taskHTML = `
                        <div id= "task${task.id}" class="task">
                                <div class="main-detail">
                                    <input type="checkbox" name="completed" id="" class="task-done">
                                    <span class="task-name">${task.title}</span>
                                    <i class="fa-solid fa-star important"></i>
                                    <i class="fa-solid fa-trash delete-task"></i>
                                </div>
                                <div class="details">
                                    <p id="priority">Priority: ${task.priority}</p>
                                    <p id="description">Description:${task.description}</p>
                                </div>
                                <div class="edit-task">
                                    <form>
                                        <div class="edit-label">
                                            <label for="edit-taskname">Task</label>
                                        </div>
                                        <div class="edit-input">
                                            <input id="edit-taskname" type="text">
                                        </div>
                                        <div class="edit-label">
                                            <label for="edit-description">Description</label>
                                        </div>
                                        <div class="edit-input">
                                            <textarea id="edit-description" cols="30" row="10"></textarea>
                                        </div>
                                        <div class="edit-label">
                                            <label for="edit-duedate">Due Date:</label>
                                        </div>
                                        <div class="edit-input">
                                            <input type="edit-date" name="duedate" id="due-date">
                                        </div>
                                        <div class="edit-label">
                                            <label for="priority">Priority:</label>
                                        </div>
                                        <div class="input">
                                            <select name="priority" id="select-priority">
                                                <option value="low" id="low" class="option">Low</option>
                                                <option value="medium" id="medium" class="option">Medium</option>
                                                <option value="high" id="high" class="option">High</option>
                                            </select>
                                        </div>
                                        <div class="form-control">
                                            <input type="submit" value="Submit">
                                            <input id="cancel" type="button" value="Cancel">
                                        </div>
                                    </form>
                                </div>
                        </div>`
                taskContainer.insertAdjacentHTML("beforeend",taskHTML)
                
                let taskCont = document.querySelector(`#task${task.id}`)

                // ^ Show task details
                taskCont.addEventListener('click', function(e){
                    let taskDetails = taskCont.querySelector('.details')
                    taskDetails.classList.toggle('active')
                })

            

                // ^ Delete task
                let deleteTaskBtn = document.querySelector(`#task${task.id}>.main-detail>.delete-task`)
                deleteTaskBtn.addEventListener('click',deleteTask)

                // ^ Complete Task
                let completeTask = document.querySelector(`#task${task.id}>.main-detail>input[type="checkbox"]`)
                completeTask.addEventListener('change',(e)=>{

                    // ! CREATE FUNCTION FOR TASK COMPLETE
                


                   let taskName = document.querySelector(`#task${task.id}>.task-name`)
                   taskName.classList.toggle('done')
                })

                
            })
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



export { eventListeners, displayTasks, addProject, addTask }