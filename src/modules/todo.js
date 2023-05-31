export default class ToDo {
    constructor(id,title,description, dueDate, priority, completed = false) {
        this.id = id
        this.title = title
        this.description = description
        this.dueDate = new Date(dueDate)
        this.priority = priority
        this.completed = completed
    }

    editDescription(title,description,dueDate,priority,completed) {
        this.title = title
        this.description = description
        this.dueDate = new Date(dueDate)
        this.priority = priority
        this.completed = completed

    
    }
}