import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div className="page">
            <h1>Atividade 03 e 04</h1>

            <ul class="nav nav-pills">
                <li class="nav-item">
                    <Link class="nav-link active" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/create">Adicionar Disciplina</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/read">Ver disciplinas</Link>
                </li>
            </ul>
        </div>
    )
}