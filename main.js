// ****ToDo List ****

// ***List state functions*** 
const toDoList = (function(){
let projects=["default","Java"]
let itemList=[{
    id:24,
    title:"test",
     description:"Here to test",
     dueDate:"02-20-2026",
     priority:3,
     project:"default",
     complete:false
},{
    id:25,
    title:"test",
     description:"Here to test",
     dueDate:"02-20-2026",
     priority:3,
     project:"default",
     complete:false
},];
function newItem (title,
     description,
     dueDate,
     priority,
     project){
    const id ="TID-" +crypto.randomUUID();
    const complete = false;
    title = titleCleaner(title);
    if (!priorityChecker(priority)){
        return {ok: false, error: "Priority is greater than 5 or less than 1"}
    }
    project = project || "default";
    addProject(project);
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
    getProjects,
    deleteItem,
    addProject,
    getItemsByProject,
    editItem,
    getItem

};

})();
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

console.log("This is the first:" + taskList)

function renderList() {
    const list = toDoList.getList();
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



toDoList.newItem("  Cook.     .","Grill ribs and start rice cooker",'08-22-2024', 4)
toDoList.newItem("Eat","Set Plate and chow down",'08-22-2024', 5, "Habits")
toDoList.newItem("testingError","My priority is wrong",'08-22-2024', 90, "Habits")

renderList();
