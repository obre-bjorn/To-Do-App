import { ToDoList } from './toDoList'

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

        if (localStorage.getItem('toDoList') === null) {

            localStorage.setItem("toDoList", JSON.stringify(data.getProjects()))

            // data.addProject('Coding')
            // data.getProjects()[1].addToDo('Learn and Practice HTML', new Date())

        }





    } else {
        // Too bad, no localStorage for us
    }

}



export function saveProject(data) {

    let oldData = getData()
    oldData.push(data)
    localStorage.setItem('toDoList', JSON.stringify(oldData))

}

export function getData() {
    let data = JSON.parse(localStorage.getItem("toDoList"))
    return data
}