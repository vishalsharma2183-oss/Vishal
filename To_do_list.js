let taskInput=document.querySelector(".taskInput");
let addBtn=document.querySelector(".addBtn");
let taskList=document.querySelector(".taskList");
let errorMsg=document.querySelector(".errorMsg");
let tasks=JSON.parse(localStorage.getItem("tasks")) || []

 addBtn.addEventListener("click",addTask)
 taskInput.addEventListener('keydown',(e)=>{
   if( e.key==="Enter"){
    addTask()
   }
    
 });
 
function addTask() {
    if (taskInput.value.trim()===""){
        errorMsg.style.display="block"
        return;
    }
    
        errorMsg.style.display="none";
    let task={text:taskInput.value.trim()
        ,completed:false
    };
    tasks.push(task)
    saveTasks();
    renderAllTasks();
taskInput.value=""
}
function saveTasks()
{
    localStorage.setItem("tasks",JSON.stringify(tasks))
}
function renderTasks(task)
{

let li= document.createElement("li")
let checkbox=document.createElement("input")
checkbox.type="checkbox"
if (task.completed){
    li.classList.add("completed")
    checkbox.checked=true;
}
checkbox.addEventListener("change",()=>{
    task.completed=!task.completed
    li.classList.toggle("completed");
        saveTasks();
})
let text=document.createElement("span")
    text.textContent=task.text;
    let dltBtn=document.createElement("button")
dltBtn.textContent="X"
dltBtn.addEventListener('click',(e)=>{
    e.stopPropagation();
    dltBtn.classList.add("fade-out")
    setTimeout(() => {
        tasks=tasks.filter(t=>t!== task)
   saveTasks()
   renderAllTasks()
    }, 300);
   
});

let editBtn= document.createElement("button")
editBtn.textContent="Edit"
editBtn.addEventListener('click',(e)=>{
    e.stopPropagation();
    let new_text=prompt("Edit task",task.text)
    if (new_text && new_text.trim() !=="") {
        task.text=new_text.trim()
        text.textContent=task.text
        saveTasks()
    }
});
let left = document.createElement("div");
let right = document.createElement("div")
li.appendChild(text)
li.appendChild(dltBtn)
li.appendChild(editBtn)
li.appendChild(checkbox)
taskList.appendChild(li)


li.appendChild(left);
li.appendChild(right);

}

function renderAllTasks() {
    taskList.innerHTML = ""; 
    tasks.forEach(task => {
        renderTasks(task);
    });
}
renderAllTasks();

