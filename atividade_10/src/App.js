import React from 'react';

import Tela from './components/tela'
import Resultados from './components/resultados'

import './App.css'

function App() {
  return (
    <div className="App">
      <h1>Calculadora Redux</h1>
      <Tela />
      <Resultados />
    </div>
  );
}

export default App;
