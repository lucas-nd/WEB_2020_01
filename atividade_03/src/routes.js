import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Create from './components/Create'
import Read from './components/Read'

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/create" component={Create}/>
            <Route path="/read" component={Read}/>
          </Switch>
        </BrowserRouter>
    )
}