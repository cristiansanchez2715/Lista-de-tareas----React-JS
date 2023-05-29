import React from "react";
import { TodoNuevoTodo } from "./NuevoTodo";

function TodoSearch({searchValue, setSearchValue}) {
 
    return(
      <input id="input" placeholder="cortar mango biche" style={{
        marginLeft: '25%', fontSize: '20px', fontWeight: 'bold', padding: '18px'
      }} value={searchValue}
      onChange={(event) => {
       setSearchValue(event.target.value)
      }} /> 
      
    );
    <button id="botonNuevo" onClick={ TodoNuevoTodo }>Agregar</button>
  }

  export { TodoSearch }