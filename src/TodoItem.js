import React from "react";
import './TodoItem.css'

function TodoItem(props){
    
    return(
        <li className={`TodoItem ${props.completed && `TodoItemComplete`}`}>
            <h6 className={`TodoItem-h6 ${props.completed && `TodoItem-h6--complete`}`}>Completado</h6>
            <span 
                className={`Icon icon-check ${props.completed && `Icon-check--active`}`}
                onClick={props.onComplete}
            >
                ✅
            </span>
            <p className={`TodoItem-p ${props.completed && `TodoItem-p--complete`}`}>{ props.text }</p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                ❌
            </span>
        </li>
    )
}

export { TodoItem }