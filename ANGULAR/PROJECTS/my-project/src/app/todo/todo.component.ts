import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
 
  TodoList :string []=[];
  inputvalue :string=""; 
  removetodo(name:string){
    this.TodoList =this.TodoList.filter((value)=>value!==name)

  }

  addTodo(){
    if(this.inputvalue!=""){
      this.TodoList.push(this.inputvalue)
      this.inputvalue="";
    }else{
      alert("please enter todo")
    }
    
  }




  constructor(){}
 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this.TodoList=['cricket','books']

   

  
 }


}
