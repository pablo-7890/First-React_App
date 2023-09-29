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

  const añadirCarrito = () => {

    const carritoAlmacenado = localStorage.getItem('carrito');
    const carritoActual = carritoAlmacenado ? JSON.parse(carritoAlmacenado) : [];
    carritoActual.push(productoDetallado);
    localStorage.setItem('carrito', JSON.stringify(carritoActual));

  };

  return (
    <div className='contenedor-producto'>
      <h3>{productoDetallado.title}</h3>
      <img className='imagen-producto' src={productoDetallado.image} alt={productoDetallado.title}/>
      <p>${productoDetallado.price}</p>
      <p>{productoDetallado.description}</p>
      <button onClick={añadirCarrito} className='boton-carrito'>
      <Link to={"/carrito-de-compras"}>Añadir al carrito</Link>
      </button>
      <br/>
      <button className='boton-volver'>
      <Link to={"/"}>volver </Link>
      </button>
      
    </div>
  );
};

export default ProductoDetallado;

