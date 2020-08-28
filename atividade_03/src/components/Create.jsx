import React, { useState } from 'react'
import api from '../services/api'
import { Link, useHistory } from 'react-router-dom'

export default function Create() {
    const [ nome, setNome ] = useState('')
    const [ curso, setCurso ] = useState('')
    const [ capacidade, setCapacidade ] = useState('')

    const history = useHistory()

    function handleCreate(e){
        e.preventDefault()

        api.post('/disciplinas/register',{
            nome,
            curso,
            capacidade
        }
        ).then(
            alert("Deu tudo certo!")
        )

        history.push('/')
    }

    return (
        <div className="page">
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