import React, {useState} from "react";
import shortid from "shortid";

class AddTodo extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            inputTodo:"",
            selectValue:""
        }

        this.handleSelect = this.handleSelect.bind(this);
    }
    
    handleSelect = (e) =>{
        this.setState({
            selectValue : e.target.value 
        })
    }
    
    handleChange = (e) =>{
        this.setState({
            inputTodo: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            task : this.state.inputTodo,
            priority: this.state.selectValue,
            isChecked : false
        }); 

        this.setState({
            inputTodo : ""
        })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    value={this.state.inputTodo}
                    onChange={this.handleChange}
                />
                <select onChange={this.handleSelect} value={this.state.selectValue}>
                    <option>Choose</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button onClick={this.handleSubmit}>Add</button>
            </form>
        )
    }
}

export default AddTodo