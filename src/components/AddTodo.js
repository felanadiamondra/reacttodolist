import React from 'react'
import { useState } from 'react'
import {TodoItem} from '../datas/TodoItem'

function addTodo(){
    
}

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todos : TodoItem,
            inputTodo : ""
        }
    }

   submitTodo = (e) =>{
       e.preventDefault();
   }

    addTodo = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.submitTodo}>
                <div>
                    <input name='inputTodo'
                    value={this.state.inputTodo}
                    onClick={this.addTodo}/>
                    <select>
                        <option default>Priorité</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>
            </form>
            
        )
    }
}

export default AddTodo