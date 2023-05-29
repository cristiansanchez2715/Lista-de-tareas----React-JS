const estilos = {
    backgroundColor: 'red'
}

function TodoCounter({total, completed} ) {
    return( 
      <h1 style={{fontSize: 28,
      color: 'white',
      margin: 0,
      padding: '48px',
      marginLeft: '22.5%',
      backgroundColor: 'black',
      width: '285px',
      marginTop: '15%',
      borderRadius: '20px'}}>
        HaS completado {completed} de {total} TO-do
      </h1>
    )
  
  }

  export { TodoCounter }