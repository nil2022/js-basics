let todoApp = [],isDone = false;
    let count= 1;
    const addTask = (task) => {
        if(todoApp.length!=0) ++count; //Increment task count if 1st task is added
        todoApp[count-1] = {id:count};
        todoApp[count-1].text = task;
        todoApp[count-1].isDone = isDone;
        console.log(`Task${count} added!`);
        return '\n';
    }
    const deleteTask = () => {
        if(todoApp.length==0){
            console.log(`No tasks available. Please add task first!`);  
        } else {
            console.log(`Task${todoApp[todoApp.length-1].id} deleted`);
            todoApp.pop();
        }
        return '\n';
    }
    const updateTaskAsDone = (id) => {
          if((id>todoApp.length || id<1) || typeof(id)==='undefined'){
            console.log(`No tasks available. Please add task first!`);
        }
          else if(todoApp[id-1].isDone==false){
            console.log(`Task ${id} marked as done!`);
            todoApp[id-1].isDone = true;
        } else {
            console.log(`Task ${id} is already done!`);
        }
        return '\n';
    }
    const updateTaskText = (id, text) => {
        if((id>todoApp.length || id<1) || typeof(id)==='undefined'){
            console.log(`No tasks available. Please add task first!`);
        } else {
            todoApp[id-1].text = text;
            console.log(`Task${id} updated`);
            console.log(`Id:${todoApp[id-1].id} text: ${todoApp[id-1].text} isDone: ${todoApp[id-1].isDone}`);
        }
            return '\n';
        }    
    const getAllTasks = () => {
       if(todoApp.length==0){
           console.log('No tasks added!');
       } else {
        for(i=0;i<todoApp.length;i++){
            console.log(`Id:${todoApp[i].id} text: ${todoApp[i].text} isDone: ${todoApp[i].isDone}`);
        }
       }
       return '\n'
    } 
console.log(`Todo App`);
console.log(`1.Add a task\n2.Delete a last added task\n3.Mark the task as done
4.Edit the task\n5.Return all task\n6.Exit App`);
let flag=null;
do{
    let key = prompt(`Enter choice :`); 
 switch (key) {
    case '1': let task1 = prompt(`Enter task: `); 
            addTask(task1);
            flag=true;
            break;
    case '2': deleteTask();
              flag=true;     
              break;
    case '3': if(todoApp.length==0){
                console.log(`No tasks available. Please add task first!`);
            } else {
              let id1 = prompt(`Enter Id to Mark done:`);             
              updateTaskAsDone(id1);
              flag=true;
            }
              break;
    case '4': if(todoApp.length==0){
                console.log(`No tasks available. Please add task first!`); 
            } else {
              let id = 0, text = '';
              id = prompt(`Enter Id:`);
              text = prompt(`Enter text to update:`)
              updateTaskText(id,text);
              flag=true;
            }
              break;
    case '5': getAllTasks();
              flag=true;  
              break;
    default : console.log(`Exiting!`);
              flag = false;
 }
}while (flag==true);