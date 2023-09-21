import React from 'react' ;
import '../hojas-de-estilo/producto.css';

function Producto({descripcion, imagen, precio}){
    return(
      <div className='contenedor-producto'>
        <h3>{descripcion}</h3>
        <img className='imagen-producto' src={imagen} alt={descripcion}/>
        <p>${precio}</p>
      </div>
    );
}

export default Producto;