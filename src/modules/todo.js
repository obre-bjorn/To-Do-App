export default class ToDo {
    constructor(description, dueDate, important = false, completed = false) {
        this.id = new Date()
        this.description = description
        this.dueDate = dueDate
        this.completed = completed
        this.important = important
    }

    editDescription(description) {
        this.description = description
    }

}