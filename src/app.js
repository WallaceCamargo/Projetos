import React from 'react';
// import Home from './pages/Home';
import Produtos from './compones/Produtos';
// import Lista from './compones/Lista';
import Atributos from './compones/Atributos';
import Colors from './compones/Colors';
import './style/produtos.css';

const App = () => {
  return (
    <div>
      <Atributos />
      <Colors />
      {/* <Lista /> */}
      {/* <Home /> */}
      <Produtos />
    </div>
  );
};

export default App;
