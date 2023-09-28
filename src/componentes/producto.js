import React from 'react' ;
import {Link} from 'react-router-dom'
import '../hojas-de-estilo/producto.css';

function Producto({titulo, imagen, precio, id}){
    return(
      <div className='contenedor-producto'>
        <h3>{titulo}</h3>
        <img className='imagen-producto' src={imagen} alt={titulo}/>
        <p>${precio}</p>
        <Link to={`/producto/${id}`}>ver mas...</Link>
      </div>
      
    );
}

export default Producto;