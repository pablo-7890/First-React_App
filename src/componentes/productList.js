import React, { useEffect, useState } from "react";
import Producto from "./producto";
import Boton from "./boton";

// se debe poner por fuera la lista recordar que el react-router
// renderiza o no un componente segun la url

const ProductList = () => {
  const [producto, setProducto] = useState([]);
  const [mostrarTodo, setMostrarTodo] = useState(false);

  const mostrarProductos = mostrarTodo ? producto : producto.slice(0, 4);

  const funcionClic = () => {
    setMostrarTodo(!mostrarTodo);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((producto) => setProducto(producto));
  }, []);
  return (
    <div className="contenedor-principal">
      {mostrarProductos.map((producto, id) => (
        <Producto
          id={id + 1}
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
