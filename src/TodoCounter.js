import React from "react";
import './TodoCounter.css';

function TodoCounter(){
    return(
        <div>
            <h2 className="TodoCounter-titulo">Hola Bryan, haz completado 2 de 3 TODOs</h2>
            <div className="TodoCounter-elipse"></div>
            <p className="TodoCounter-subtituloHoy">Hoy</p>
            <p className="TodoCounter-tareasHoy">3 tareas</p>
        </div>
    )
}

export { TodoCounter };