import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Usuario from "./componentes/usuario";
import ProductList from "./componentes/productList";
import ProductoDetallado from "./componentes/productoDetallado";
import Carrito from "./componentes/carrito";
import CarroCompras from './Imagenes/CarroCompras.png'

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users/5")
      .then((res) => res.json())
      .then((usuario) => setUsuario(usuario));
  }, []);

  return (
    <div className="App">
      <header className="header">
      <Link to="/">
        <h1 className="titulo">Online Shop</h1>
      </Link>
      <Link to="/carrito-de-compras">
        <img className="imagen-carrito-compras" src={CarroCompras} alt="imagen-carrito-compras" />
      </Link>
      {usuario && (
        <Usuario
          nombre={usuario.name.firstname}
          apellido={usuario.name.lastname}
        />
      )}
      </header>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/producto/:id" element={<ProductoDetallado />} />
        <Route path="/carrito-de-compras" element={<Carrito />} />
      </Routes>
    </div>
  );
}

export default App;
