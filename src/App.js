import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
//import './App.css';

const todos = [
  { text: "Cortar cebolla", completed: true},
  { text: "Tomar curso de react", completed: true},
  { text: "Llorar con la llorona", completed: false},
]

function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      
      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}/> //Esto es una propiedad, no un atributo porque no es una etiqueta HTML es un componente REACT
        ))}
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
