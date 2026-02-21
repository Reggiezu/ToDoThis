// ToDo List //

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
}];
function newItem (title,
     description,
     dueDate,
     priority,
     project){
    const id = crypto.randomUUID();
    const complete = false;
    project = project || "default";
    itemList.push({id, title, description, dueDate, priority,project,complete});
    return {id, title, description, dueDate, priority,project,complete};
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

toDoList.newItem("Cook","Grill ribs and start rice cooker",'08-22-2024', 4)
toDoList.newItem("Eat","Set Plate and chow down",'08-22-2024', 5, "Habits")

