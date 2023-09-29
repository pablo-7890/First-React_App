import React from 'react';
import '../hojas-de-estilo/carrito.css'


function Carrito() {
    const productosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
  
    const total = productosCarrito.reduce((total, producto) => total + producto.price, 0);
  
    return (
    <div className='contenedor-carrito'>
      {productosCarrito.map((producto) => (
          <li key={producto.id} className='tarjeta-carrito'>
          <img src={producto.image} alt={producto.title} />   
          <h2>{producto.title}</h2>
          <p>Precio: ${producto.price}</p>
          </li>
      ))}
      <p className="total-compra">Total: ${total}</p>   
    </div>
    );
  }
  
  export default Carrito;