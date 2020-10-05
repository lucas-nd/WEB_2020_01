import React, {useState} from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'

import FirebaseService from '../services/FirebaseService'
import firebase from '../utils/Firebase'

import { connect } from 'react-redux'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import Header from './Header'

function Edit({ dados }){
    const history = useHistory()

    //if(dados.logado === false) history.push('/login')

    let { id } = useParams()

    const formik = useFormik({
        initialValues: {
            disciplina: '',
            curso: '',
            capacidade: ''
        },onSubmit: values => {
            const ob = {
                nome: values.disciplina,
                curso: values.curso,
                capacidade: values.capacidade
            }

            FirebaseService.edit(
                firebase.firestore(),
                (mensagem) => {
                    console.log(mensagem)
                },
                id,
                ob
            )
    
            history.push('/')
        }
    })

    return(
        <div className="page">
            <Header />
            <div className="alert alert-primary" role="alert">
                Reescreva todas as informações da disciplina
            </div>
            <form className="form" onSubmit={formik.handleSubmit}>
            <div className="form-group">    
                    <label htmlFor="disciplina">Disciplina</label>
                    <input
                        id="disciplina"
                        name="disciplina"
                        type="text" 
                        value={formik.values.disciplina}
                        onChange={formik.handleChange}   
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="curso">Curso</label>
                    <input
                        id="curso"
                        name="curso"
                        type="text" 
                        value={formik.values.curso}
                        onChange={formik.handleChange}    
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="capacidade">Capacidade máxima</label>
                    <input
                        id="capacidade"
                        name="capacidade"
                        type="text" 
                        value={formik.values.capacidade}
                        onChange={formik.handleChange}    
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