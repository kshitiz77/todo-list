import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
function ToDoList(props) {
    return (
        <div className="todo__style">
            <DeleteIcon className="deleteIcon" onClick={ () => {
                props.onSelect(props.id)
            }}/>
            <li> {props.text} </li>
        </div>
    )
}

export default ToDoList
