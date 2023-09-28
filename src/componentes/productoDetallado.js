import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import React from 'react';


function ProductoDetallado() {

  const [productoDetallado, setProductoDetallado] = useState([]);
  const {id}= useParams();
  console.log("id-productoDetallado", id);
  
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProductoDetallado(data));
  }, []);

  return (
    <div className='contenedor-producto'>
      <h3>{productoDetallado.title}</h3>
      <img className='imagen-producto' src={productoDetallado.image} alt={productoDetallado.title}/>
      <p>${productoDetallado.price}</p>
      <p>{productoDetallado.description}</p>
      <Link to={"/"}>Volver</Link>
      </div>
  );
};

export default ProductoDetallado;

