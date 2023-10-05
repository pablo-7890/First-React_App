import React, { useState } from "react";
import Producto from "./producto";
import Boton from "./boton";

// se debe poner por fuera la lista recordar que el react-router
// renderiza o no un componente segun la url

const ProductList = ({productos}) => {
  
  const [mostrarTodo, setMostrarTodo] = useState(false);
  const mostrarProductos = mostrarTodo ? productos : productos.slice(0, 4);

  const funcionClic = () => {
    setMostrarTodo(!mostrarTodo);
  };
  
  return (
    <div className="contenedor-principal">
      {mostrarProductos.map((producto, id) => (
        <Producto
          id={producto.id}
          titulo={producto.title}
          imagen={producto.image}
          precio={producto.price}
        />
      ))}
      <Boton
        className="boton"
        texto={mostrarTodo ? "ver menos" : "ver mas"}
        funcionClic={funcionClic}
      />
    </div>
  );
};

export default ProductList;
