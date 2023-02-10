import React, {useState,useEffect} from 'react';

const Crud = () => {

  const [miMensaje, setMiMensaje] = useState("Cargando...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> { // Funcion de tipo Callback

    /* Setting the state of the component to the string "Ya faltan dos segundos para que cargue la
    pagina" after 2 seconds. */
    setTimeout(() =>{
        setMiMensaje("Ya faltan dos segundos para que cargue la pagina");    
    },2000);
   /* Setting the state of the component to false after 4 seconds. */
    setTimeout(()=>{
        setIsLoading(false);
    },4000);
  }) 

  /* A ternary operator. */
  return (
    <>
    {isLoading ? (
        <>
            <h1>{miMensaje}</h1>
        </>
    ):(
        <>
            <div>Hola</div>
            <div>Amigos</div>
        </>
    )}
        
    </>
  )
}

export default Crud;