import { useState, useEffect, useContext, useReducer} from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Usuario from "./componentes/usuario";
import ProductList from "./componentes/productList";
import ProductoDetallado from "./componentes/productoDetallado";
import Carrito from "./componentes/carrito";
import CarroCompras from './Imagenes/CarroCompras.png';
import Filtros from "./componentes/filtros";
import { contextoFiltros } from "./contextos/filtros";

function UsarFiltros() {
  const {filtros, setFiltros} = useContext(contextoFiltros)
  
  const filtroProductos = (producto) => {
    return producto.filter(producto => {
      return (
        filtros.category === 'all'|| producto.category === filtros.category
      )
    })
  }

  return {filtroProductos,setFiltros}

}

const estadoInicial = {
  producto: [],
  usuario: null,
  carrito: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTO':
      return { ...state, producto: action.payload };
    case 'SET_USUARIO':
      return { ...state, usuario: action.payload };
    case 'AGREGAR_CARRITO':
      return { ...state, carrito: [...state.carrito, action.payload] };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, estadoInicial);
  const {filtroProductos,setFiltros} = UsarFiltros(state.producto)

  useEffect(() => {
    fetch("https://fakestoreapi.com/users/5")
      .then((res) => res.json())
      .then((usuario) => {
        dispatch({ type: 'SET_USUARIO', payload: usuario });
    });
;
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((producto) => {
        dispatch({ type: 'SET_PRODUCTO', payload: producto });
      });
  }, []);

  useEffect(() => {
    const filtrosGuardados = localStorage.getItem("filtros");
    if (filtrosGuardados) {
      const filtrosParseados = JSON.parse(filtrosGuardados);
      setFiltros(filtrosParseados);
    }
  }, []);

  const productosFiltrados = filtroProductos(state.producto)

  return (
    <div className="App">
      <header className="header">
      <Filtros onChange = {setFiltros}/>
      <Link to="/">
        <h1 className="titulo">Tienda en linea</h1>
      </Link>
      <Link to="/carrito-de-compras">
        <img className="imagen-carrito-compras" src={CarroCompras} alt="imagen-carrito-compras" />
      </Link>
      {state.usuario && (
        <Usuario
          nombre={state.usuario.name.firstname}
          apellido={state.usuario.name.lastname}
        />
      )}
      </header>
      <Routes>
        <Route path="/" element={<ProductList productos={productosFiltrados} />} />
        <Route path="/producto/:id" element={<ProductoDetallado />} />
        <Route path="/carrito-de-compras" element={<Carrito />} />
      </Routes>
    </div>
  );
}

export default App;
