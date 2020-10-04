import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import { logar } from '../store/actions'

import firebase from '../utils/Firebase'

function Login({ dados, dispatch }){
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')

    function handleLogin(e){
        e.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(email, senha)
            .then(
                dispatch(logar(email))
            )
            .catch((error) => {
                if (error.code === "auth/wrong-password") {
                    alert("Senha Errada");
                } else {
                    alert("Error Code:" + error.code);
                }
            })
    }
    return(
        <div className="page">
            <div className="alert alert-primary" role="alert">
                Informe um email e senha válidos
            </div>
            <form className="form" onSubmit={handleLogin}>
                <div className="form-group">    
                    <label>Email</label>
                    <input
                        type="text" 
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}   
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Senha</label>
                    <input 
                        type="text" 
                        value={senha}
                        onChange={(e) => {
                            setSenha(e.target.value)
                        }}    
                        className="form-control"
                    />
                </div>
                <div className="buttonsCreate">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link className="btn btn-primary" to="/">To Home</Link>
                </div>
            </form>

            <h1>{console.log(dados)}</h1>
            
        </div>
    )
}

export default connect(state => ({ dados: state }))(Login)