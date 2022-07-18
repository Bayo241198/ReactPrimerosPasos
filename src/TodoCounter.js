import React from "react";
import './TodoCounter.css';

const imagen = "https://scontent.flpb2-1.fna.fbcdn.net/v/t39.30808-6/273432272_4855080981246131_4849659704882493509_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=3CtlSeHEzDoAX_ZI0hB&_nc_oc=AQlFZiVDdRXrqrYZ7_7mD8G25ZwWmtztbpuRwYN2luHJInk6Kw9ntamb_kAW-RYb4xY&_nc_ht=scontent.flpb2-1.fna&oh=00_AT90Ed7O1P_pnRnveoYjYOLAkEJRECqy4ZtVeVRdrlO2EQ&oe=62D955EB"
function TodoCounter(){
    return(
        <div>
            <h2 className="TodoCounter-titulo">Hola Bryan, completaste 2 de 3 TODOs</h2>
            <img src={imagen} alt="foto"/>
            <p className="TodoCounter-subtituloHoy">Hoy</p>
            <p className="TodoCounter-tareasHoy">3 tareas</p>
        </div>
    )
}

export { TodoCounter };