export default class ToDo {
    constructor(id,description, dueDate, important = false, completed = false) {
        this.id = id
        this.description = description
        this.dueDate = new Date(dueDate)
        this.completed = completed
        this.important = important
    }

    editDescription(description) {
        this.description = description
    }

}