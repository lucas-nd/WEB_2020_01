import React, { useState, useEffect } from 'react'
import api from '../services/api'
import { Link, useHistory } from 'react-router-dom'

import FirebaseContext from '../utils/FirebaseContext'
import FirebaseService from '../services/FirebaseService'

const ReadPage = () => (
    <FirebaseContext.Consumer>
        {firebase => <Read firebase={firebase} />}
    </FirebaseContext.Consumer>
)

function Read(props){
    const [ data, setData ] = useState([])

    const history = useHistory()

    async function loadDisciplinas(){
        FirebaseService.list(props.firebase.getFirestore(),
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
        FirebaseService.delete(props.firebase.getFirestore(),
            (mensagem) => {
                console.log("Deu bom")
            },
            e.target.value
        )
    }

    return(
        <div className="page">
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

export default ReadPage