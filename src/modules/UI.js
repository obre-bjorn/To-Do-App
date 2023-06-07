import { getData } from "./storage";



// ! TO CHANGE!!
import { getItemById,deleteProject, deleteTask } from "../index";
import { getList } from "../index";



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
                                    <span class="task-name" id=taskname${task.id}>${task.title}</span>
                                    
                                    <i class="fa fa-pencil-square-o edit-task" aria-hidden="true"></i>
                                    <i class="fa-solid fa-trash delete-task"></i>

                                </div>
                                <div class="details">
                                    <p id="priority${task.id}">Priority: ${task.priority}</p>
                                    <p id="description${task.id}">Description:${task.description}</p>
                                </div>
                                <div id="edit-task${task.id}" class="edit-task-form">
                                    <form id="edit-form">
                                     <div class="edit-input">
                                        <div class="edit-label">
                                            <label for="edit-taskname${task.id}">Task</label>
                                        </div>
                                        <div class="edit-input">
                                            <input id="edit-taskname${task.id}" type="text" name="taskname">
                                        </div>
                                     </div>

                                    <div class="edit-input">
                                        <div class="edit-label">
                                            <label for="edit-description${task.id}">Description</label>
                                        </div>
                                        <div class="edit-input">
                                            <textarea id="edit-description${task.id}" name="description" cols="30" row="10"></textarea>
                                        </div>
                                    </div>

                                    <div class="edit-input">
                                        <div class="edit-label">
                                            <label for="edit-duedate${task.id}">Due Date:</label>
                                        </div>

                                        <div class="edit-input">
                                            <input type="date" name="duedate" id="edit-duedate${task.id}">
                                        </div>
                                        </div>

                                        <div class="edit-input">
                                        <div class="edit-label">
                                            <label for="priority${task.id}">Priority:</label>
                                        </div>
                                        <div class="input">
                                            <select name="priority" id="select-priority${task.id}">
                                                <option value="low" id="low" class="option">Low</option>
                                                <option value="medium" id="medium" class="option">Medium</option>
                                                <option value="high" id="high" class="option">High</option>
                                            </select>
                                        </div>
                                        </div>

                                        <div class=edit-input>
                    
                                            <div class="edit-form-control">
                                                <input type="submit" value="Submit">
                                                <input id="cancel" type="button" value="Cancel">
                                            </div>
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

            

                // ^ Edit task
                let editTask = document.querySelector(`#task${task.id}>.main-detail>.edit-task`)
                let taskEditform = document.querySelector(`#edit-task${task.id}`)
            

                // Input values 
                let editTaskNameInput = document.querySelector(`#edit-taskname${task.id}`)
                let editDescriprtionInput = document.querySelector(`#edit-description${task.id}`)
                let editDateInput = document.querySelector(`#edit-duedate${task.id}`)
                let editPriority = document.querySelector(`#select-priority${task.id}`)

                console.log(editPriority)
                editTaskNameInput.value = task.title
                
                editDescriprtionInput.value = task.description

                
                editDateInput.value = task.dueDate.toISOString().split("T")[0];

                let priorityOptions = editPriority.options;
                for (let i = 0; i < priorityOptions.length; i++) {
                    if (priorityOptions[i].value === task.priority) {
                        priorityOptions[i].selected = true;
                        break;
                    }
                }
                // editPriority.value = task.priority


                editTask.addEventListener('click', function(e){
                    e.stopPropagation()
                    console.log(taskEditform.classList)
                    taskEditform.classList.toggle('active')
                })

                // & Task form submision
                taskEditform.addEventListener('click',(e)=>{
                    e.stopPropagation()
                })
                let taskEditForm = taskEditform.querySelector(`form`) 

                taskEditForm.addEventListener('submit',function(e){
                    let task_name = document.querySelector(`#taskname${task.id}`)
                    let task_description = document.querySelector(`#description${task.id}`)
                    let task_priority = document.querySelector(`#priority${task.id}`)
                    

                    e.preventDefault()

                    // ^ project to edit from
                    let getProject = document.querySelector('.project.active')
                    let projectData = getItemById(getProject,'project')
                    let taskElement = e.target.parentElement
                    console.log(taskElement)
                    console.log(projectData.id);

                    
                    let taskFormData = new FormData(taskEditForm)
                    let taskDataObject =  Object.fromEntries(taskFormData.entries())
                    
                    let data = getList()

                    data.getProject(projectData.id).editTask(projectData.id,task.id,taskDataObject)

                    task_name.textContent = taskDataObject.taskname
                    task_description.textContent = taskDataObject.description
                    task_priority.textContent = taskDataObject.priority

                    // console.log(taskDataObject)
                    // & Get task Id
                    // console.log(task.id)
                    

                    taskEditform.classList.remove('active')

                })



                // ^ Delete task
                let deleteTaskBtn = document.querySelector(`#task${task.id}>.main-detail>.delete-task`)
                deleteTaskBtn.addEventListener('click',deleteTask)

                // ^ Complete Task
                let completeTask = document.querySelector(`#task${task.id}>.main-detail>input[type="checkbox"]`)
                completeTask.addEventListener('click',(e)=>{

                    // ! CREATE FUNCTION FOR TASK COMPLETE
                    
                    let taskName = document.querySelector(`#task${task.id}>.main-detail>.task-name`)
                    taskName.classList.toggle('done')
                    e.stopPropagation()

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