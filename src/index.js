import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FiltersProvider } from './contextos/filtros';


ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FiltersProvider>
);


