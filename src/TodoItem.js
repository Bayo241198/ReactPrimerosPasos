import React from "react";
import './TodoItem.css'

function TodoItem(props){

    const onComplete = () => {
        alert("Completaste la tarea " + props.text);
    }
    
    const onDelete = () => {
        alert("Borraste la tarea " + props.text);
    }

    return(
        <li className={`TodoItem ${props.completed && `TodoItemComplete`}`}>
            <h6 className={`TodoItem-h6 ${props.completed && `TodoItem-h6--complete`}`}>Completado</h6>
            <span 
                className={`Icon icon-check ${props.completed && `Icon-check--active`}`}
                onClick={onComplete}
            >
                ✅
            </span>
            <p className={`TodoItem-p ${props.completed && `TodoItem-p--complete`}`}>{ props.text }</p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                ❌
            </span>
        </li>
    )
}

export { TodoItem }