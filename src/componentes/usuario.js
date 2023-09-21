import React from 'react';
import '../hojas-de-estilo/usuario.css'

function Usuario({nombre, apellido}){
    return(
      <div className='iniciales'>
        {nombre.charAt(0).toUpperCase()}
        {apellido.charAt(0).toUpperCase()}
      </div>
    );
}

export default Usuario;
