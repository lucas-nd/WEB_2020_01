import React, { useState, useEffect } from 'react'
import api from '../services/api'
import { Link } from 'react-router-dom'

export default function Read(){
    const [ data, setData ] = useState([])

    async function loadDisciplinas(){
        const response = await api.get('/disciplina')
        setData(response.data)

        console.log(response.data)
    }

    useEffect(()=>{
        loadDisciplinas()
    },[])

    function handleDeleteDisciplinas(e){
        api.delete(`/disciplina/`+e.target.value).then(
            alert("Recarregue a página")
        ).catch((error)=>{
            alert(error)
        })
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
                                <tr key={info.id}>
                                    <td>{info.nome}</td>

                                    <td>{info.curso}</td>

                                    <td>{info.capacidade}</td>

                                    <td><button className="buttonDelete" value={info.id} onClick={handleDeleteDisciplinas}>Apagar</button></td>
                                    <td><Link className="buttonEdit" to={()=>{
                                        return("/edit/"+info.id)
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