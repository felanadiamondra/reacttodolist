import React from "react";
import AddTodo from './AddTodo'
import TodoSearch from "./TodoSearch";
import Todo from './Todo';
import '../styles/TodoList.css';

class TodoList extends React.Component{
   state = {
       todos : []
   }

   addTask = todo =>{
       this.setState({
           todos : [todo, ...this.state.todos]
       })
   }

//    toggleComplete = id =>{
//        this.setState({
//            todos : this.state.todos.map(todo => {
//                if(todo.id === id){
//                    return {
//                        ...todo,
//                        isChecked : !todo.isChecked
//                    }
//                } else {
//                    return todo
//                }
//            })
//        })
//    }

   handleCheckboxChange = id =>{
       this.setState({
           todos : this.state.todos.map(todo =>{
               if(todo.id === id){
                   return {
                       ...todo,
                       isChecked : !todo.isChecked
                   }
               } else {
                   return todo
               }
           })
       })
   }

   render(){
       return (
           <div>
               <AddTodo onSubmit={this.addTask}/>
                <TodoSearch alltodo={this.todos}/>
           </div>
           
       )
   }
}

export default TodoList