import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

import FirebaseService from '../services/FirebaseService'
import firebase from '../utils/Firebase'

import { connect } from 'react-redux'

import Header from './Header'

function Read({ dados }){
    const [ data, setData ] = useState([])

    const history = useHistory()

    //if(dados.logado === false) history.push('/login')

    async function loadDisciplinas(){
        FirebaseService.list(firebase.firestore(),
            (disciplinas) => {
                setData(disciplinas)
            }
        )

        console.log(data)
    }

    useEffect(()=>{
        loadDisciplinas()
    },[])

    function handleDeleteDisciplinas(e){
        FirebaseService.delete(firebase.firestore(),
            (mensagem) => {
                console.log("Deu bom")
            },
            e.target.value
        )

        history.push('/')
    }

    return(
        <div className="page">
            <Header />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Disciplina</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Capacidade</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((info) => {
                            return(
                                <tr key={info._id}>
                                    <td>{info.nome}</td>

                                    <td>{info.curso}</td>

                                    <td>{info.capacidade}</td>

                                    <td><button className="buttonDelete" value={info._id} onClick={handleDeleteDisciplinas}>Apagar</button></td>
                                    <td><Link className="buttonEdit" to={()=>{
                                        return("/edit/"+info._id)
                                    }}>Editar</Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <Link className="btn btn-primary" to="/">To Home</Link>
        </div>
    )
} 

export default connect(state => ({ dados: state }))(Read)