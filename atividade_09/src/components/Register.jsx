import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import firebase from '../utils/Firebase'

function Register(){
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const [ cSenha, setCsenha ] = useState('')
    const history = useHistory()

    function handleRegister(e){
        e.preventDefault()

        if(cSenha !== senha){
            alert("As senhas não correspondem!")
        }else{
            firebase
            .auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(
                () => {
                    firebase.auth().onAuthStateChanged(
                        (user) => {
                            user.sendEmailVerification()
                        }
                    )
                    alert("Cadastrado com sucesso")
                    history.push("/login")
                }
            )
            .catch((error) => {
                if (error.code === "auth/wrong-password") {
                    alert("Senha inválida");
                }else if(error.code === "auth/invalid-email"){
                    alert("Email inválido");
                }else {
                    alert("Error Code:" + error.code);
                }
            })
        }
    }
    return(
        <div className="page">
            <div className="alert alert-primary" role="alert">
                Informe um email e senha válidos
            </div>
            <form className="form" onSubmit={handleRegister}>
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
                        type="password" 
                        value={senha}
                        onChange={(e) => {
                            setSenha(e.target.value)
                        }}    
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label>Confimar a Senha</label>
                    <input 
                        type="password" 
                        value={cSenha}
                        onChange={(e) => {
                            setCsenha(e.target.value)
                        }}    
                        className="form-control"
                    />
                </div>
                <div className="buttonsCreate">
                    <button type="submit" className="btn btn-primary">Registrar</button>
                    <Link className="btn btn-primary" to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Register