import { Project } from "./project.js";


class ToDoList {
    constructor() {
        this.projects = []
        this.projects.push(new Project('Today'))
    }

    addProject(title) {
        let project = new Project(title)
        this.projects.push(project)
    }

    deleteProject() {

    }


    getProjects() {
        return this.projects
    }
}

let toDos = new ToDoList()

toDos.addProject('Coding')
toDos.getProjects()[1].addToDo('Learn and Practice HTML', new Date())

toDos.getProjects().forEach((project) => {
    console.log(`${project.title} `)
    project.getAllToDo().forEach((todo) => {
        console.log(todo)
    })
    console.log('\n')
})