
let tasks= ["Buy milk", "Study JS"]
localStorage.setItem("tasks",JSON.stringify(tasks))
let stored=localStorage.getItem("tasks")
let parsedTasks=JSON.parse(stored)
console.log(parsedTasks);
console.log(tasks);

let some=["hello","brother"]
localStorage.setItem("some",JSON.stringify(some))
let something=localStorage.getItem("some")
let parsxe=JSON.parse(something)
console.log(parsxe)
console.log(some)
parsedTasks.push("clean room")
localStorage.setItem("tasks",JSON.stringify(parsedTasks))
console.log(tasks);