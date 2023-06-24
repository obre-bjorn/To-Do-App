import { Project } from "./project.js";
import { createStorage, saveProject as saveProjToStorage, checkStorageData,deleteProject as delProjFromStorage } from "./storage.js";
import { addProject as domAddProject } from "./UI.js";

export class ToDoList {
    constructor() {
        this.projects = []
        this.id = 0


    }

    addProject(title, available) {
        let project = new Project(this.id, title)
        this.projects.push(project)
        let projectData = project.getProjectInfo()
        domAddProject(`project${this.id}`, projectData.title)
        this.id++
            if (!available) {
                saveProjToStorage(project)
            }
    }

    deleteProject(id) {
        let projectIndex = this.projects.findIndex(project => project.id == id)
        this.projects.splice(projectIndex,1)
        delProjFromStorage(id)

    }

    getProject(id){
        return this.projects.find(project => project.id == id)
    }


    getProjects() {
        return this.projects
    }
     
    getAllTasks(){
        let tasks = []
        this.projects.forEach(project=>{
            project.getTasks().forEach(task=>{
                let projectDetail = project.getProjectInfo() 
                if(task.remainingDays() >= 0){
                tasks.push(
                    {taskdetail:task,
                        projId:projectDetail.id}
                    )}
            })
        })
        return tasks
    }
    getTodayTasks(){
        let tasks = []
          this.projects.forEach(project=>{
            project.getTasks().forEach(task=>{
                let projectDetail = project.getProjectInfo() 
                if(task.remainingDays() === 0){
                tasks.push(
                    {taskdetail:task,
                        projId:projectDetail.id}
                    )
                }
            })
        })
        return tasks

    }
    getWeekTasks(week){
        let tasks = []
         this.projects.forEach(project=>{
            project.getTasks().forEach(task=>{
                let projectDetail = project.getProjectInfo() 
                if(task.taskWeek() === week && task.remainingDays() >= 0){
                tasks.push(
                    {taskdetail:task,
                        projId:projectDetail.id}
                    )
                }
            })
        })
        return tasks
    }
}

// let toDos = new ToDoList()

// toDos.addProject('Coding')
// toDos.getProjects()[1].addToDo('Learn and Practice HTML', new Date())

// toDos.getProjects().forEach((project) => {
//     console.log(`${project.title} `)
//     project.getAllToDo().forEach((todo) => {
//         console.log(todo)
//     })
//     console.log('\n')
// })

