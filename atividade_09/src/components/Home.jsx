import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div className="page">
            <h1>Atividade 09</h1>

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