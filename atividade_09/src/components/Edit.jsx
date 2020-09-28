import React, {useState} from 'react'
import api from '../services/api'
import { useParams, Link, useHistory } from 'react-router-dom'

import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const EditPage = () => (
    <FirebaseContext.Consumer>
        {firebase => <Edit firebase={firebase} />}
    </FirebaseContext.Consumer>
)

function Edit(props){
    const [ nome, setNome ] = useState('')
    const [ curso, setCurso ] = useState('')
    const [ capacidade, setCapacidade ] = useState('')

    const history = useHistory()

    let { id } = useParams()

    function handleEditDisciplina(e){
        e.preventDefault()

        FirebaseService.edit(
            props.firebase.getFirestore(),
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
export default EditPage