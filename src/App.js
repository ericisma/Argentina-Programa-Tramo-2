import React from "react";
// import logo from './logo.svg';
// import './App.css';
// import ProductoDetalle from "./components/ProductoDetalle";
import ProductPage from "./pages/ProductPage"; //importar mi pagina !!!!!!
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductPage />
        {/* <ProductoDetalle/> */}
      </header>
    </div>
  );
}

export default App;
