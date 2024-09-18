const addTask = function(){
    const taskInput = document.getElementById('taskInput');
    const taskInputValue = taskInput.value;


    if(taskInputValue !== ""){
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = '<input type="checkbox">  ' + taskInputValue + ' <button onclick="deleteTask(this)"> Delete </button>';
        taskList.appendChild(li);

        taskInput.value = '';
    }
    else{
        alert('Please Enter a value');
    }
}

const deleteTask = function(btn){
    const li = btn.parentNode;
    li.parentNode.removeChild(li);
    
}
const deleteAllChecked = function(){
    const taskUl = document.getElementById('taskList');
    const checkBoxes = document.querySelectorAll('input[type = "checkbox"]:checked');
    
    checkBoxes.forEach(checkbox => {
        const parentCheckbox = checkbox.parentNode;
        parentCheckbox.parentNode.removeChild(parentCheckbox);
    });
}