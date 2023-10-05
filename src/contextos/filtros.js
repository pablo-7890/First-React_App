import {createContext, useState} from 'react';

export const contextoFiltros = createContext()

export function FiltersProvider({children}){
  const [filtros, setFiltros] = useState({
    category:'all'
  })
  return(
    <contextoFiltros.Provider value={{
      filtros,
      setFiltros
    }}
    >
      {children}
    </contextoFiltros.Provider>
  )
}