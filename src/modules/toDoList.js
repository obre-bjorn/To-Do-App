import { Project } from "./project.js";
import { createStorage, saveProject, checkStorageData } from "./storage.js";
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
                saveProject(project)
            }
    }

    deleteProject() {
        
    }


    getProjects() {
        return this.projects
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