import React, {useState} from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'

import FirebaseService from '../services/FirebaseService'
import firebase from '../utils/Firebase'

import { connect } from 'react-redux'

import Header from './Header'

function Edit({ dados }){
    const [ nome, setNome ] = useState('')
    const [ curso, setCurso ] = useState('')
    const [ capacidade, setCapacidade ] = useState('')

    const history = useHistory()

    if(dados.logado === false) history.push('/login')

    let { id } = useParams()

    function handleEditDisciplina(e){
        e.preventDefault()

        FirebaseService.edit(
            firebase.firestore(),
            (mensagem) => {
                console.log(mensagem)
            },
            id,
            {
                nome,
                curso,
                capacidade
            }
        )

        history.push('/')
    }

    return(
        <div className="page">
            <Header />
            <div className="alert alert-primary" role="alert">
                Reescreva todas as informações da disciplina
            </div>
            <form className="form" onSubmit={handleEditDisciplina}>
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
                <div className="buttonsEdit">
                    <button type="submit" className="btn btn-primary">Editar</button>
                    <Link className="btn btn-primary" to="/">To Home</Link>
                </div>
            </form>
        </div>
    )
}
export default connect(state => ({ dados: state }))(Edit)