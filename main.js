// ToDo List //

const toDoList = (function(){
let projects=["default"]
let itemList=[];
function newItem (title, description, dueDate, priority, project){
    project = project || "default";
    itemList.push({title, description, dueDate, priority,project});
    return {title, description, dueDate, priority,project};
}
function completeItem (){

};
function getList(){
    return itemList;
};
function getProjects(){
    return projects;
}
function changePriority(){

}

return{
    newItem,
    completeItem,
    getList,
    getProjects,
    changePriority,

};

})();

// toDoList.newItem("Cook","Grill ribs and start rice cooker",'08-22-2024', 4)
// toDoList.newItem("Eat","Set Plate and chow down",'08-22-2024', 5, "Habits")

