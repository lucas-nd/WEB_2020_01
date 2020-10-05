import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import FirebaseService from '../services/FirebaseService'
import firebase from '../utils/Firebase'

import { connect } from 'react-redux'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import Header from './Header'

function Create({ dados }){
    const history = useHistory()

    if(dados.logado === false) history.push('/login')

    return(
        <div className="page">
            <Header />
            <Formik
                initialValues = {{
                    disciplina: '',
                    curso: '',
                    capacidade: ''
                }}

                validationSchema={
                    Yup.object({
                        disciplina: Yup.string()
                            .max(15, 'Só são aceito no máximo 15 caracteres.')
                            .required('O nome da disciplina é obrigatório.'),
                        curso: Yup.string()
                            .max(15, 'Só são aceito no máximo 15 caracteres.')
                            .required('O nome do curso é obrigatório.'),
                        capacidade: Yup.string()
                            .max(15, 'Só são aceito no máximo 15 caracteres.')
                            .required('A capacidade é obrigatório.'),
                    })
                }

                onSubmit= {values => {
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
                }}
            >
                {(props) => (
                    <Form className="form">
                        <div className="form-group">    
                            <label htmlFor="disciplina">Disciplina</label>
                            <Field
                                id="disciplina"
                                name="disciplina"
                                type="text" 
                                className={
                                    props.touched.disciplina ? props.errors.disciplina ? 'form-control is-invalid' : 'form-control is-valid' : 'form-control'
                                }
                            />
                            <ErrorMessage name="disciplina" />
                        </div>
                        <div className="form-group">    
                            <label htmlFor="curso">Curso</label>
                            <Field
                                id="curso"
                                name="curso"
                                type="text" 
                                className={
                                    props.touched.curso ? props.errors.curso ? 'form-control is-invalid' : 'form-control is-valid' : 'form-control'
                                }
                            />
                            <ErrorMessage name="curso" />
                        </div>
                        <div className="form-group">    
                            <label htmlFor="capacidade">Capacidade</label>
                            <Field
                                id="capacidade"
                                name="capacidade"
                                type="text" 
                                className={
                                    props.touched.capacidade ? props.errors.capacidade ? 'form-control is-invalid' : 'form-control is-valid' : 'form-control'
                                }
                            />
                            <ErrorMessage name="capacidade" />
                        </div>
                        <div className="buttonsCreate">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                            <Link className="btn btn-primary" to="/">To Home</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default connect(state => ({ dados: state }))(Create)