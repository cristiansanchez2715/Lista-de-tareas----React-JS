let n = 0;

function TodoClick(){
    return(
        <>
        <p>
            Diste click {n} veces</p>
            <button onClick={ () => {n += 1; console.log("el usuario oprimio el boton: " + n + " veces")}}>boton</button>
            
            </>
    )
}
export { TodoClick }