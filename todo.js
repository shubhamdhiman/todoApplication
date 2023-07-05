

// Grab Elements from the html
const taskInput = document.getElementById("taskInput")
const addButton = document.getElementById("addButton")
const taskList = document.getElementById("taskList")


// Add event listener to add Button

addButton.addEventListener("click", addTask)

taskInput.addEventListener("keydown",function(event){

    if(event.key === "Enter"){
        addTask()
    }

})


// Function to add new task
function addTask(){
    const taskText = taskInput.value;
    if(taskText !== ""){

        // Create a new Li ELement
        const newTask = document.createElement("li")

        // Create a checkbox
        const checkbox = document.createElement('input')
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox")
        checkbox.addEventListener('change',function(){
            if(checkbox.checked){
                newTask.classList.add("completed")
            }else{
                newTask.classList.remove("completed")
            }
        })

        newTask.append(checkbox)

        // Create task text element
        const taskTextElement = document.createElement('span')
        taskTextElement.innerHTML = taskText;

        newTask.append(taskTextElement)

        // Creating Button element
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML = "Delete";
        deleteButton.classList.add('deleteButton')
        deleteButton.addEventListener("click",function(){

            if(checkbox.checked){
                newTask.remove()
            }

        })

        newTask.append(deleteButton)

        // Add the new task to the task list
        taskList.append(newTask)

        taskInput.value = "";
    }
}