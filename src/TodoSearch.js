import React from "react";
import './TodoSearch.css';

function TodoSearch(){
    const [] = React.useState('Juan');

    

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    } 

    return(
        <input 
            className="TodoSearch" 
            placeholder="Buscar..."
            onChange={onSearchValueChange}
        />
    )
}

export { TodoSearch };