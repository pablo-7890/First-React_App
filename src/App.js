import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Usuario from "./componentes/usuario";
import ProductList from "./componentes/productList";
import ProductoDetallado from "./componentes/productoDetallado";

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
        <h1 className="titulo">Online Shop</h1>
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
      </Routes>
    </div>
  );
}

export default App;
