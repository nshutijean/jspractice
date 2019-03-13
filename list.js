let todos = ["Sleep"];

let input = prompt("What is your action? \n1. New Todo \n2. View List \n3. Delete a Todo \n4. Quit");

while (input !== "4") {
    //
    if(input == "2") {
        listTodos();  
    } else if(input == "1"){
        addTodo();
    } else if (input == "3") {
        deleteTodo();   
    }
    //ask again for input
    input = prompt("What is your action? \n1. New Todo \n2. View List \n3. Delete a Todo \n4. Quit");
}
console.log("OK, YOU QUIT THE APP");

function listTodos() {
    console.log("***********");
        todos.forEach((todo,i) => {
           console.log(i + ": " + todo);
        });  
    console.log("***********");
}

function addTodo() {
     //ask the new todo list
    let newTodo = prompt("Enter new Todo:");
    //add to todos array
    todos.push(newTodo);
    console.log("ADDED TODO!");
}

function deleteTodo() {
    //ask for an index to delete
    let index = prompt("Enter index of todo to delete:");
    todos.splice(index,1);
    //delete the todo
   console.log("DELETED TODO!");
}
