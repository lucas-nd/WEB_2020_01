import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import Header from './Header'

import { connect } from 'react-redux'

function Home( {dados } ){
    const history = useHistory()
    if(dados.logado === false) history.push('/login')

    return(
        <div className="page">
            <Header />
            <h1>Atividade 09 e 11</h1>

            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create">Adicionar Disciplina</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/read">Ver disciplinas</Link>
                </li>
            </ul>
        </div>
    )
}

export default connect(state => ({ dados: state }))(Home)