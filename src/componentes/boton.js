import React from 'react';
import '../hojas-de-estilo/boton.css';

function Boton({texto, funcionClic}){
  return(
    <button className='boton' onClick={funcionClic}>
      {texto}
    </button>
  )
}

export default Boton;
