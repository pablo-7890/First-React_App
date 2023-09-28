import { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Producto from './componentes/producto';
import Boton from './componentes/boton';
import Usuario from './componentes/usuario';
import ProductoDetallado from './componentes/productoDetallado';




function App() {

  const [producto, setProducto] = useState([]);
  const [mostrarTodo, setMostrarTodo] = useState(false);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(producto=>setProducto(producto))
  }, []);

  useEffect(() => {
    fetch('https://fakestoreapi.com/users/5')
            .then(res=>res.json())
            .then(usuario=>setUsuario(usuario))
  }, []);

  const mostrarProductos = mostrarTodo? producto : producto.slice(0,4);

  const funcionClic = () => {
    setMostrarTodo(!mostrarTodo);
  }

  return (
    <div className="App">
      <header className='header'>
      <h1 className='titulo'>Online Shop</h1>
      {usuario && (
        <Usuario
          nombre={usuario.name.firstname}
          apellido={usuario.name.lastname}/>
      )}  
      </header>
      <div className='contenedor-principal'>
        {mostrarProductos.map((producto,id)=>(
          <Producto
          id={id+1}
          titulo={producto.title}
          imagen={producto.image}
          precio={producto.price}
          />
        ))}
        <Boton className='boton'
          texto={mostrarTodo ? 'ver menos' : 'ver mas'}
          funcionClic={funcionClic}
        />
      </div>
      <Routes>
          <Route path="/" element={<Producto />} />
          <Route path="/producto/:id" element={<ProductoDetallado />} />
      </Routes>
    </div>
  );
}

export default App;