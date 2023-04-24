export default class ToDo {
    constructor(description, dueDate, completed = false) {
        this.description = description
        this.dueDate = dueDate
        this.completed = completed
    }

    editDescription(description) {
        this.description = description
    }

}