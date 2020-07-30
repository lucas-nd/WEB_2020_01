import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Questao01 from './components/questao01'
import Questao02 from './components/questao02'
import Questao03 from './components/questao03'
import Questao04 from './components/questao04'
import Questao05 from './components/questao05'

function App() {
  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ this }/>
            <Route path="/questao01" exact component={ Questao01 }/>
            <Route path="/questao02" exact component={ Questao02 }/>
            <Route path="/questao03" exact component={ Questao03 }/>
            <Route path="/questao04" exact component={ Questao04 }/>
            <Route path="/questao05" exact component={ Questao05 }/>
          </Switch>
        </BrowserRouter>
        <h1>Atividade 02</h1>
        <ul>
          <li>
            <a href="/questao01">Questão 01</a>
          </li>
          <li>
            <a href="/questao02">Questão 02</a>
          </li>
          <li>
            <a href="/questao03">Questão 03</a>
          </li>
          <li>
            <a href="/questao04">Questão 04</a>
          </li>
          <li>
            <a href="/questao05">Questão 05</a>
          </li>
        </ul>
    </>
  );
}

export default App;
