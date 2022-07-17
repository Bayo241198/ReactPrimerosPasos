import React from "react";
import './TodoList.css';
import { TodoSearch } from "./TodoSearch";

function TodoList(props){
    return(
        <section className="TodoList">
            <div className="TodoListDia">
                <p className="TodoListFecha">17</p>
                <p className="TodoListFechaLiteral">Dom</p>
                <p className="TodoListTareasPlanteadas">Total: 8 horas al día</p>
            </div>
            <TodoSearch/>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export { TodoList }