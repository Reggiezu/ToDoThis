// ****ToDo List ****

// ***List state functions*** 
const toDoList = (function(){
let projects=["default","Java"]
let itemList=[];
function newItem (title,
     description,
     dueDate,
     priority,
     project,
     complete){
    const id ="TID-" +crypto.randomUUID();
    title = titleCleaner(title);
    if (!priorityChecker(priority)){
        return {ok: false, error: "Priority is greater than 5 or less than 1"}
    }
    project = project || "default";
    if(!getProjects(titleCleaner(project))){
    addProject(project);
    }

    itemList.push({id, title, description, dueDate, priority,project,complete});
    return {id, title, description, dueDate, priority,project,complete};
}
const titleCleaner=(str)=>{
str =str.toString();
return str = str.toLowerCase().trim().replace(/\s/g, "")
}
const priorityChecker=(priority)=>{
    priority=Number(priority);
    if (priority <=0 || priority > 5){
        return false
    }
    return priority
}

function getList(){
    return itemList;
};
function setList(list){
    return itemList=list
}
function getProjects(){
    return projects;
}
// will change from always true to a toggle system between true and false. 
function completeItem(id){
    const item = getItem(id);
    return item.complete=true;
}

//not the most efficent way to do this since it creates a new array and loop through the whole array looking for id
function deleteItem(id){
    return itemList = itemList.filter((item) => item.id !== id);
}

// .find is not the most efficent
function addProject(name){
    if(!projects.find((item)=> item === name)){
        return projects.push(name);
    }
    return -1;
}

function getItemsByProject(projectName){
    return itemList.filter((item) => item.project === projectName)
}
function getItem(id){
    return itemList.find((item) => item.id === id);
}
function editItem(id, property, newValue){
    const item = getItem(id);
    return item[property]=newValue;
}

return{
    newItem,
    completeItem,
    getList,
    setList,
    getProjects,
    deleteItem,
    addProject,
    getItemsByProject,
    editItem,
    getItem

};

})();

//*********** Local Storage functions *************

function loadTasks(){
   const stored = localStorage.getItem("tasks");
   if(stored){
      const parsed = JSON.parse(stored);
      toDoList.setList(parsed);
   }
}
function saveTasks(){
   localStorage.setItem("tasks", JSON.stringify(toDoList.getList()));
}

//****Rendering pieces ***
const taskList = document.getElementById("Item-List")
const taskCard = document.getElementById("Task-Card")
const taskTitle = document.getElementById("Task-Title")
const taskDescription = document.getElementById("Task-Description")
const taskDueDate = document.getElementById("Task-DueDate")
const taskPriority = document.getElementById("Task-Priority")
const taskProject = document.getElementById("Task-Project")
const taskCompletion = document.getElementById("Task-Completion")
const delBtn = document.querySelectorAll("button")
const addTaskBtn = document.getElementById("add-task-btn")
const addTaskForm = document.getElementById("new-task-form")
const closeTaskFormBtn = document.getElementById("close-task-form");
const submitBtn = document.getElementById("submit-task");
const projectFilter = document.getElementById("Project-Filter")


function validityChecker(){
    const taskVal = addTaskForm.querySelector('input[name="completion-status"]:checked')?.value??"";
    return{
        "Task-Title": taskTitle.value !="",
        "Task-Description":taskDescription.value !="",
        "Task-DueDate":taskDueDate.checkValidity(taskDueDate.value),
        "Task-Priority":taskPriority.checkValidity(taskPriority.value),
        "Task-Project":taskProject.value != "",
        "Task-Completion":taskVal!=""
    }
}
function isValid(Obj){
    return Object.values(Obj).every(value=> value == true)
}


submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    const taskVal = addTaskForm.querySelector('input[name="completion-status"]:checked')?.value??"";
    if(isValid(validityChecker())){
        console.log(taskProject.value)
const newTask =toDoList.newItem(taskTitle.value,taskDescription.value,taskDueDate.value,taskPriority.value,taskProject.value,taskVal)
saveTasks();
return addToList(newTask)
}else{
    return console.log("did not work")
}

})
function clearList(){
    taskList.innerHTML=""
}
toDoList.getProjects().forEach(function(project){
        getProjectList(project,projectFilter)
    })
function renderList() {
    const list =projectFilter.value==="all"? toDoList.getList():toDoList.getItemsByProject(projectFilter.value);
     list.map((task) => taskList.innerHTML +=`<div id="Task-Card-${task.id}" class="card">
            <span id="Task-Title-${task.id}" class="cardItem"><strong>Title: </strong> ${task.title} </span>
            <p id="Task-Description-${task.id}" class="cardItem"><strong>Description: </strong> ${task.description}</p>
            <p id="Task-DueDate-${task.id}" class="cardItem"><strong>Due Date: </strong> ${task.dueDate} </p>
            <p id="Task-Priority-${task.id}" class="cardItem"><strong>Priority: </strong> ${task.priority}</p>
            <p id="Task-Project-${task.id}" class="cardItem"><strong>Project: </strong> ${task.project}</p>
            <p id="Task-Completion-${task.id}" class="cardItem"><strong> Completed: </strong >${task.complete} </p>
            <button id="Task-Deletion-${task.id}" > Delete Task</button>
        </div>`)
}
function getProjectList(project,location){
    const option = document.createElement("option");
option.value = project;
option.text=project;
location.appendChild(option);
}
addTaskBtn.addEventListener('click',(e)=>{
e.preventDefault();
taskCard.classList.remove("hidden");
console.log("hey");
toDoList.getProjects().forEach(function(project){
getProjectList(project,taskProject)
})});

taskList.addEventListener('click', function(event){
        
        const task = event.target.closest('button')
        console.log(task.id)
        const taskId=task.id.replace("Task-Deletion-", "")
        console.log(taskId)

        deleteListItem(taskId)
        

})
projectFilter.addEventListener('change',(e)=>{
clearList();
renderList();
})
function closeTaskForm() {
  addTaskForm.reset();
  taskProject.options.length=0;
  taskCard.classList.add("hidden");
}
function removeFromList(taskID){
    const div = document.getElementById(`Task-Card-${taskID}`)
    console.log("removing from list")
    return div.classList.add("hidden")
}
function addToList(task){
    taskList.innerHTML +=`<div id="Task-Card-${task.id}" class="card">
            <span id="Task-Title-${task.id}" class="cardItem"><strong>Title: </strong> ${task.title} </span>
            <p id="Task-Description-${task.id}" class="cardItem"><strong>Description: </strong> ${task.description}</p>
            <p id="Task-DueDate-${task.id}" class="cardItem"><strong>Due Date: </strong> ${task.dueDate} </p>
            <p id="Task-Priority-${task.id}" class="cardItem"><strong>Priority: </strong> ${task.priority}</p>
            <p id="Task-Project-${task.id}" class="cardItem"><strong>Project: </strong> ${task.project}</p>
            <p id="Task-Completion-${task.id}" class="cardItem"><strong> Completed: </strong >${task.complete} </p>
            <button id="Task-Deletion-${task.id}" > Delete Task</button>
        </div>`
}
closeTaskFormBtn.addEventListener("click", closeTaskForm);

// **** Controller/Handler ****
function deleteListItem(taskID){
    toDoList.deleteItem(taskID);
    saveTasks();
    return removeFromList(taskID);
}

loadTasks();
renderList();
