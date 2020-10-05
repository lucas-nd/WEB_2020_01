import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import FirebaseService from '../services/FirebaseService'
import firebase from '../utils/Firebase'

import { connect } from 'react-redux'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import Header from './Header'

function Create({ dados }) {
    const history = useHistory()

    //if(dados.logado === false) history.push('/login')

    const formik = useFormik({
        initialValues: {
            disciplina: '',
            curso: '',
            capacidade: ''
        },
        onSubmit: values => {
            const ob = {
                nome: values.disciplina,
                curso: values.curso,
                capacidade: values.capacidade
            }
            
            FirebaseService.create(firebase.firestore(),
                (mensagem) => {
                    console.log(mensagem)
                },
                ob
            )
    
            history.push('/')
        },validationSchema: Yup.object({
            disciplina: Yup.string()
                .max(25, 'Use 25 caracteres ou menos')
                .required('Obrigatório'),
            curso: Yup.string()
                .max(25, 'Use 25 caracteres ou menos')
                .required('Obrigatório'),
            capacidade: Yup.string()
                .max(25, 'Use 3 caracteres ou menos')
                .required('Obrigatório'),
        })
    })

    return (
        <div className="page">
            <Header />
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
                <div className="buttonsCreate">
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                    <Link className="btn btn-primary" to="/">To Home</Link>
                </div>
            </form>
        </div>
    )
}

export default connect(state => ({ dados: state }))(Create)