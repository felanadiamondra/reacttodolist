import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            inputTodo : ""
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }

    render(){
        return (
            <div>
                <input name="inputTodo" placeholder='Todo here ... ' 
                        onChange={this.handleChange}/>
                <select>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
        )
    }
}

export default TodoForm