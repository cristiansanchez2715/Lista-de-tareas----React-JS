const estilos = {
    backgroundColor: 'red'
}

function TodoCounter({total, completed} ) {
    return( 
      <h1 id="cabecera" style={{fontSize: 28,
      color: 'white',
      padding: '48px',
      backgroundColor: 'black',
      width: '285px',
      marginTop: '15%',
      borderRadius: '20px'} }>
        HaS completado {completed} de {total} TO-do
      </h1>
    )
  
  }

  export { TodoCounter }