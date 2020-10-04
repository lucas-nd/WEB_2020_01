import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import FirebaseService from '../services/FirebaseService'
import firebase from '../utils/Firebase'

import { connect } from 'react-redux'

import Header from './Header'

function Create({ dados }) {
    const [ nome, setNome ] = useState('')
    const [ curso, setCurso ] = useState('')
    const [ capacidade, setCapacidade ] = useState('')

    const history = useHistory()

    if(dados.logado === false) history.push('/login')

    function handleCreate(e){
        e.preventDefault()

        const disciplina = {
            nome,
            curso,
            capacidade
        }
        FirebaseService.create(firebase.firestore(),
            (mensagem) => {
                console.log(mensagem)
            },
            disciplina
        )

        history.push('/')
    }

    return (
        <div className="page">
            <Header />
            <form className="form" onSubmit={handleCreate}>
                <div className="form-group">    
                    <label>Disciplina</label>
                    <input
                        type="text" 
                        value={nome}
                        onChange={(e) => {
                            setNome(e.target.value)
                        }}   
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Curso</label>
                    <input 
                        type="text" 
                        value={curso}
                        onChange={(e) => {
                            setCurso(e.target.value)
                        }}    
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Capacidade máxima</label>
                    <input 
                        type="text" 
                        value={capacidade}
                        onChange={(e) => {
                            setCapacidade(e.target.value)
                        }}    
                        className="form-control"
                    />  
                </div>
                <div className="buttonsCreate">
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                    <Link className="btn btn-primary" to="/">To Home</Link>
                </div>
            </form>
        </div>
    )
}

export default connect(state => ({ dados: state }))(Create)