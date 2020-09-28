import React, { useState } from 'react'
import api from '../services/api'
import { Link, useHistory } from 'react-router-dom'

import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const CreatePage = () => (
    <FirebaseContext.Consumer>
        {firebase => <Create firebase={firebase} />}
    </FirebaseContext.Consumer>
)

function Create(props) {
    const [ nome, setNome ] = useState('')
    const [ curso, setCurso ] = useState('')
    const [ capacidade, setCapacidade ] = useState('')

    const history = useHistory()

    function handleCreate(e){
        e.preventDefault()

        const disciplina = {
            nome,
            curso,
            capacidade
        }
        FirebaseService.create(props.firebase.getFirestore(),
            (mensagem) => {
                console.log(mensagem)
            },
            disciplina
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

export default CreatePage