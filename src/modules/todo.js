import { differenceInCalendarDays} from "date-fns"

export default class ToDo {
    constructor(id,title,description, dueDate, priority, completed = false) {
        this.id = id
        this.title = title
        this.description = description
        this.dueDate = new Date(dueDate)
        this.priority = priority
        this.completed = completed
    }

    editTask(title,description,dueDate,priority,completed) {
        this.title = title
        this.description = description
        this.dueDate = new Date(dueDate)
        this.priority = priority
        this.completed = completed

        return this
    }

    setCompleted(){
        this.completed = !this.completed
        console.log(this)
    }
    
    remainingDays(){
        let currentDate = new Date()
        let date = differenceInCalendarDays(this.dueDate,currentDate)
        return date
    }
}