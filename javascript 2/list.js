let todos =["Buy New Turtle"];

 let input = prompt("What would you like to do?");
 while(input !== "list"){
    if (input === "new") {
     let newTodo = prompt("Enter new Todo"); 
     todos.push(newTodo); 

    } else if (input === "quit"){
    console.log("ok, you quit the app");
      
    }
    
}
   input = prompt("What would you like to do?");
   console.log(todos);