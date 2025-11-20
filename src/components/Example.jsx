import { useState,useEffect } from "react";

function Example(){
    const[count,setCount]=useState(0);

    //Defenizione dell'effetto, che gestisce i problemi collaterali
    useEffect(()=>{
        document.title=`Conteggio: ${count}`;
    }, [count]);


    //Questo metodo non è sincronizzato con il titolo
    //quindi bisogna utilizzare l'useeffect
    {/*const handleClick=() =>{
        setCount(count+1);
        document.title=`Conteggio: ${count}`;
    };*/}


    return( 
        <div>
            <p>Conteggio: {count}</p>
            <button onClick={handleClick}>Incrementa</button>
        </div>
    );
}

export default Example;