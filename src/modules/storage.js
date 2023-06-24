import { ToDoList } from './toDoList'
import { addProject, displayTask } from './UI';

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    }
}



export function createStorage(data) {

    if (storageAvailable("localStorage")) {
        // Yippee! We can use localStorage awesomeness

        if (checkStorageData() === 0) {


            localStorage.setItem("toDoList", JSON.stringify(data.getProjects()))


        } else {

            let storage = JSON.parse(localStorage.getItem('toDoList'))
                // console.log(storage)
            storage.forEach(project => {
                data.addProject(project.title, true)
                console.log(project)
                if(project.tasks.length){
                    let projects = data.getProjects()

                    let tasks = project.tasks
                    tasks.forEach(task=> {
                        projects[projects.length - 1].addTask(project.id,task.title,task.description,task.priority,task.dueDate,true)
                    })
                }
            });


        }
        // console.log(data.getProjects())
        
             document.addEventListener("DOMContentLoaded", function() {
              
                 let today = document.querySelector('#home')
                 today.click()
    });
        
    } else {
        // Too bad, no localStorage for us
    }
    
    let today = document.querySelector('#home')
    today.click()
}


export function checkStorageData() {
    let data = localStorage.getItem('toDoList')

    if (data) {
        let data = JSON.parse(localStorage.getItem('toDoList'))
        let lastDataId = data[data.length - 1].id
        return (lastDataId)
    } else {
        return 0;
    }
}



export function saveProject(data) {

    let oldData = getData()
    oldData.push(data)
    localStorage.setItem('toDoList', JSON.stringify(oldData))

}

export function deleteProject(id){
    let oldData = getData()
    oldData.splice(id,1)
    localStorage.setItem('toDoList',JSON.stringify(oldData))

}


export function saveTask(projectId, task) {
    let oldData = getData()
    console.log(oldData)
    oldData[projectId].tasks.push(task)
    localStorage.setItem('toDoList', JSON.stringify(oldData))
}


export function saveEditTask(projectId,taskId,task){
    let data = getData()
    data[projectId].tasks[taskId] = task
    localStorage.setItem('toDoList',JSON.stringify(data))
}
export function deleteTask(projectId, taskId){
    let data = getData()
    data[projectId].tasks.splice(taskId,1)
    localStorage.setItem('toDoList',JSON.stringify(data))

}

export function getData() {
    let data = JSON.parse(localStorage.getItem("toDoList"))
    return data
}