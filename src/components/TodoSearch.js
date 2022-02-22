import React from "react";
import Todo from "./Todo";

class TodoSearch extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            inputSearch: "",
            searchTodo : props.alltodo
        }
    }

    handleChange = e =>{
        this.setState({
            inputSearch : e.target.value
        });
        // alert('ok, ca marche')

        if(this.inputSearch !== ""){
            const res = this.todos.filter((todo) =>{
                return todo.task.toLowerCase().includes(this.inputSearch.toLowerCase())
            })
            this.searchTodo = res
          } else{
              this.searchTodo = this.props.alltodo
        }
        
    }

    render(){
        return(
            <div>
                <button>Supprimer</button>
                <input type="text"
                        placeholder="Saisir nom de tâche" 
                        value={this.state.inputSearch}
                        onChange={this.handleChange}/>

                {/* <select onChange={this.handleSelect} value={this.state.selectValue}>
                    <option>Choose</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select> */}
                <button>Rechercher</button>
                <table>
                    <tr>
                        <th>COCHER TOUT</th>
                        <th>TACHES</th>
                        <th>PRIORITE</th>
                    </tr>
                        {this.searchTodo && this.searchTodo.length >0 ? (
                            this.searchTodo.map((res) =>(
                                <Todo key={res.id}
                                        task={res.task}
                                        priority={res.priority}
                                        isChecked={res.isChecked}
                                        handleCheckboxChange={() => this.handleCheckboxChange(res.id)}/>
                            ))
                        ) : (
                            <h1>No task!</h1>
                        )}
                </table>
            </div>
        )
    }
}

export default TodoSearch