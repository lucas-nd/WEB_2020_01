import React, { useState, useEffect } from 'react'
import api from '../services/api'

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

    return(
        <div className="page">
            <table class="table table-dark table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Disciplina</th>
                        <th scope="col">Curso</th>
                        <th scope="col">Capacidade</th>
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
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
} 