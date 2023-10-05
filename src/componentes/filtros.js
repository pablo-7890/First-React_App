import React, { useState, useEffect } from "react";


function Filtros({onChange}){
  const [categorias, setCategorias] = useState("all");

  useEffect(() => {
    const filtrosGuardados = localStorage.getItem("filtros");
    if (filtrosGuardados) {
      const filtrosParseados = JSON.parse(filtrosGuardados);
      setCategorias(filtrosParseados.category);
      onChange(filtrosParseados);
    }
  }, []);

  const cambiarCategoria = (evento) => {
    onChange(estadoPrevio => ({
      ...estadoPrevio,
      category: evento.target.value
    }));

    const filtrosGuardados = { category: evento.target.value };
    localStorage.setItem("filtros", JSON.stringify(filtrosGuardados));

  
  };
  return(
    <div>
      <label htmlFor="categoría">Filtrar por Categoría: </label>
      <select
        id="categoría"
        onChange={cambiarCategoria}
      >
        <option value="all">Todas las Categorías</option>
        <option value="electronics">Electrónica</option>
        <option value="jewelery">Joyas</option>
        <option value="men's clothing">Ropa Hombre</option>
        <option value="women's clothing">Ropa Mujer</option>
      </select>
    </div>

    );
}

export default Filtros;