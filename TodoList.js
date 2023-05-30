import  './estilos.css'

function TodoList( {children} ) {
    
  return(

    
     <ul id='ul' style={{
         fontSize: '20px', fontWeight: 'bold', padding: '48px', display: 'flex', flexDirection: 'column',
      position: 'relative', listStyle: 'none', border: '2px solid white'}}> <h1>Lista To-Do</h1>
        { children}    
      </ul>
    )
  
  }

  export { TodoList }