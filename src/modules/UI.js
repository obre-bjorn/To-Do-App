export function addProject(title) {
    let projectContainer = document.getElementById('projects')

    let project = document.createElement('button');
    project.textContent = title
    projectContainer.appendChild(project)

}