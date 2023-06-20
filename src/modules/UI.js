import { getData } from "./storage";



// ! TO CHANGE!!
import { getItemById,deleteProject, deleteTask } from "../index";
import { getList } from "../index";


export function TaskView(id, title, description,priority,dueDate,remainingDays){
    let taskContainer = document.getElementById('task-container')

    let taskHtml = `
                  <div id= "task${id}" class="task">
                                <div class="main-detail">
                                    <input type="checkbox" name="completed" id="" class="task-done">
                                    <span class="task-name" id=taskname${id}>${title}</span>
                                    
                                    <i class="fa fa-pencil-square-o edit-task" aria-hidden="true"></i>
                                    <i class="fa-solid fa-trash delete-task"></i>
                                    <p class="task-name" id=days${id}>remainingDays</p>

                                </div>
                                <div class="details">
                                    <p id="priority${id}">Priority: ${priority}</p>
                                    <p id="description${id}">Description:${description}</p>
                                </div>
                                <div id="edit-task${id}" class="edit-task-form">
                                    <form id="edit-form">
                                     <div class="edit-input">
                                        <div class="edit-label">
                                            <label for="edit-taskname${id}">Task</label>
                                        </div>
                                        <div class="edit-input">
                                            <input id="edit-taskname${id}" type="text" name="taskname">
                                        </div>
                                     </div>

                                    <div class="edit-input">
                                        <div class="edit-label">
                                            <label for="edit-description${id}">Description</label>
                                        </div>
                                        <div class="edit-input">
                                            <textarea id="edit-description${id}" name="description" cols="30" row="10"></textarea>
                                        </div>
                                    </div>

                                    <div class="edit-input">
                                        <div class="edit-label">
                                            <label for="edit-duedate${id}">Due Date:</label>
                                        </div>

                                        <div class="edit-input">
                                            <input type="date" name="duedate" id="edit-duedate${id}">
                                        </div>
                                        </div>

                                        <div class="edit-input">
                                        <div class="edit-label">
                                            <label for="priority${id}">Priority:</label>
                                        </div>
                                        <div class="input">
                                            <select name="priority" id="select-priority${id}">
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
                        taskContainer.insertAdjacentHTML("beforeend", taskHtml)
                    
                    let taskCont = document.querySelector(`#task${id}`)

                    // ^ Show task details
                    taskCont.addEventListener('click', function(e){
                        let taskDetails = taskCont.querySelector('.details')
                        taskDetails.classList.toggle('active')
                    })

                

                    // ^ Edit task
                    let editTask = document.querySelector(`#task${id}>.main-detail>.edit-task`)
                    let taskEditform = document.querySelector(`#edit-task${id}`)
                

                    // Input values 
                    let editTaskNameInput = document.querySelector(`#edit-taskname${id}`)
                    let editDescriprtionInput = document.querySelector(`#edit-description${id}`)
                    let editDateInput = document.querySelector(`#edit-duedate${id}`)
                    let editPriority = document.querySelector(`#select-priority${id}`)

                    console.log(editPriority)
                    editTaskNameInput.value = title
                    
                    editDescriprtionInput.value = description

                    editDateInput.value = dueDate.toISOString().split("T")[0];

                    let priorityOptions = editPriority.options;
                    for (let i = 0; i < priorityOptions.length; i++) {
                        if (priorityOptions[i].value === priority) {
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
                        let task_name = document.querySelector(`#taskname${id}`)
                        let task_description = document.querySelector(`#description${id}`)
                        let task_priority = document.querySelector(`#priority${id}`)
                        

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

                        data.getProject(projectData.id).editTask(projectData.id,id,taskDataObject)
                        let todos = data.getProject(projectData.id).getTasks()
                        console.log(todos[id].remainingDays())
                        task_name.textContent = taskDataObject.taskname
                        task_description.textContent = taskDataObject.description
                        task_priority.textContent = taskDataObject.priority

                        // console.log(taskDataObject)
                        // & Get task Id
                        // console.log(task.id)
                        

                        taskEditform.classList.remove('active')

                    })



                    // ^ Delete task
                    let deleteTaskBtn = document.querySelector(`#task${id}>.main-detail>.delete-task`)
                    deleteTaskBtn.addEventListener('click',deleteTask)

                    // ^ Complete Task
                    let completeTask = document.querySelector(`#task${id}>.main-detail>input[type="checkbox"]`)
                    completeTask.addEventListener('click',(e)=>{

                        // ! CREATE FUNCTION FOR TASK COMPLETE
                        
                        let taskName = document.querySelector(`#task${id}>.main-detail>.task-name`)
                        taskName.classList.toggle('done')
                        e.stopPropagation()

                    })

}


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




function addTask(id, title, description,priority,dueDate) {
    TaskView(id,title,description,priority,dueDate)
}




function displayTasks(element) {
    //Set active Button
    let taskContainer = document.getElementById('task-container')
    
    if (element.target.classList.contains('active')) {
        return
    }


            // & TO CHANGE ASAP!
            setActiveTask(element)
            clearContainer(taskContainer)
            let activeProject = document.querySelector('.project.active')
            let project = getItemById(activeProject, 'project')
            let data = project.projectData
        
            let tasks = data.getTasks()
        
            if (!tasks.length) {
        
                    let noTasksHTML = ` <h3>No tasks available. Click the (+) button below to add tasks</h3>`
                    taskContainer.insertAdjacentHTML("beforeend", noTasksHTML)
                } 
            else {
                tasks.forEach((task) =>{
                    TaskView(task.id,task.title,task.description,task.priority,task.dueDate)
        
            })
        }
        }


// display all Tasks




function setActiveTask(element) {
    let projects = [...document.querySelectorAll('.project')]

    projects.forEach((project) => {
        if (project != this) {
            project.classList.remove('active')

        }
    })

    element.target.classList.add('active')

}



export { eventListeners, displayTasks, addProject, addTask,setActiveTask,clearContainer }