
function TodoItem(props) {
    return(
      <li className="lista listaComplete" style={{ marginTop: '0px'}}>
        <span className="x" onClick={props.onDelete}  style={{
            marginLeft: '90%', marginTop: '10px', 
        }  }>X</span>
        <p className={`props ${props.completed ? "props-completed" : ""}`} style={{
             marginTop: '10px', marginBottom: '100px', borderRadius: '5px', color: 'white',
             border: '2px solid white', padding: '10px', border: '2px solid white', backgroundColor: 'black'
              }}>{props.text} <span  > <div id="div"  onClick={props.onComplete} className="imagen"></div></span> </p>
      
      </li>
    )
  
  }
  export { TodoItem }