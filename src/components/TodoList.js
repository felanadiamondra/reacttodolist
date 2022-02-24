import React from "react";
import AddTodo from './AddTodo'
import TodoSearch from "./TodoSearch";
import Todo from './Todo';
import '../styles/TodoList.css';

class TodoList extends React.Component{
   state = {
       todos : [],
       searchValue : "",
       selectValue : ""
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
   handleChange = e =>{
       this.setState({
           searchValue : e.target.value
       })
   }

   handleSelectChange = e =>{
    this.setState({
        selectValue : e.target.value
    })
   }
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
                {/* <TodoSearch alltodo={this.todos}/> */}
                <h2>Search filtering</h2>
                <input
                    type="text"
                    name="search"
                    value={this.state.searchValue}
                    onChange={this.handleChange}
                />
                  <select onChange={this.handleSelectChange} value={this.state.selectValue}>
                    <option>Choose</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <table>
                    <tr>
                        <th>COCHER TOUT</th>
                        <th>TACHES</th>
                        <th>PRIORITE</th>
                    </tr>
                        {
                       
                       
                            // this.state.todos.map((res) =>(
                            //     <Todo key={res.id}
                            //             task={res.task}
                            //             priority={res.priority}
                            //             isChecked={res.isChecked}
                            //             handleCheckboxChange={() => this.handleCheckboxChange(res.id)}/>
                            // ))

                        
                                 this.state.todos.filter(res =>
                                res.task.match(new RegExp(this.state.searchValue , "i"))).filter(
                                    res => res.priority.match(new RegExp(this.state.selectValue, "i"))
                                ).
                                map(
                                    res =>(
                                        <Todo key={res.id}
                                             task={res.task}
                                              priority={res.priority}
                                                isChecked={res.isChecked}
                                                 handleCheckboxChange={() => this.handleCheckboxChange(res.id)}/>
                                    )
                                )
                        }
                </table>
           </div>
           
       )
   }
}

export default TodoList