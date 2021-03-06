import React from "react";
import './TodoList.css';

function TodoList(props){
    return(
        <section className="TodoList">
            <div className="TodoListDia">
                <p className="TodoListFecha">18</p>
                <p className="TodoListFechaLiteral">Lun</p>
                <p className="TodoListTareasPlanteadas">Total: 8 horas al día</p>
            </div>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList }