// ToDo List //

const toDoList = (function(){
let projects=["default","Java"]
let itemList=[{
    id:24,
    title:"test",
     description:"Here to test",
     dueDate:"02-20-2026",
     priority:3,
     project:"Java"
}];
function newItem (title,
     description,
     dueDate,
     priority,
     project){
    const index = crypto.randomUUID();
    project = project || "default";
    itemList.push({index, title, description, dueDate, priority,project});
    return {index, title, description, dueDate, priority,project};
}

function completeItem (){

};
function getList(){
    return itemList;
};
function getProjects(){
    return projects;
}

function completeItem(index){

}

//not the most efficent way to do this since it creates a new array and loop through the whole array looking for index
function deleteItem(index){
    return itemList = itemList.filter((item) => item.index !== index);
}

function addProject(name){
    return projects.push(name);
}

function getItemsByProject(projectName){

}
function getItem(index){
    return itemList.find((item) => item.id === index);
}
console.log(itemList[0].id)
function editItem(index, property, newValue){
    const item = getItem(index);
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

