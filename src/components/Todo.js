import React from "react"

export default props => (
    <tr>
        <td>
            <input type="checkbox" 
                    checked={props.isChecked}
                     onChange={props.handleCheckboxChange}/>
        </td>
        <td>{props.task}</td>
        <td>{props.priority}</td>
    </tr>
    // <div>
    //     <div onClick={props.toggleComplete}>{props.task} - {props.priority}</div>
    // </div>

)