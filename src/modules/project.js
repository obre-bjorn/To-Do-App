import ToDo from "./todo.js";
import { saveEditTask, saveTask,deleteTask as deleteTaskStorage} from "./storage.js";
import { addTask as addTaskUI } from "./UI.js";

export class Project {

    constructor(id, title) {
        this.id = id
        this.title = title
        this.tasks = []
        this.taskId = 0
    }


    getProjectInfo() {
        return {
            id: this.id,
            title: this.title,
            tasks: this.tasks
        }
    }

    getTasks() {
        return this.tasks
    }


    addTask(projectId,title,description,priority, dueDate,available) {
        let toDo = new ToDo(this.taskId,title,description, dueDate,priority);
        this.tasks.push(toDo)
        
        if(!available){
            dueDate = new Date(dueDate)
            addTaskUI(projectId,this.taskId, title, description,priority,dueDate)
            saveTask(projectId, toDo)
        }

        this.taskId++
        
    }

    editTask(projectId,taskId, data){
        let taskIndex = this.tasks.findIndex(task => task.id == taskId)
        // this.tasks[taskIndex].editTask()
       let task =  this.tasks[taskIndex].editTask(data.taskname,
            data.description,data.duedate,data.priority)
        console.log(this.tasks[taskIndex])

        saveEditTask(projectId,taskId,task)
    }

    deleteTask(projectId,taskId){
        let taskIndex = this.tasks.findIndex(task => task.id == taskId)
        this.tasks.splice(taskIndex,1)
        console.log(this.tasks)
        deleteTaskStorage(projectId,taskId)
    }


}

// let Projecta = new Project('Coding')

// Projecta.addToDo('Start Coding HTML', new Date())
// Projecta.addToDo('Start Coding CSS', new Date())
// console.log(Projecta.title);
// console.log(Projecta.getAllToDo())