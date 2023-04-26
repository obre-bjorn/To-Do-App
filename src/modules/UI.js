export function addProject(title) {
    let projectContainer = document.getElementById('projects')

    let project = document.createElement('button');
    project.textContent = title
    project.classList.add('project')
    projectContainer.appendChild(project)

}