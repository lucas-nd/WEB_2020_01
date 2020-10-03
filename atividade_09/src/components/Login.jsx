import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import FirebaseContext from '../utils/FirebaseContext'

const LoginPage = () => (
    <FirebaseContext.Consumer>
        {firebase => <Login firebase={firebase} />}
    </FirebaseContext.Consumer>
)

function Login(props){
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')

    function handleLogin(e){
        e.preventDefault()

        props.firebase
            .getAuth()
            .signInWithEmailAndPassword(email, senha)
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
        </div>
    )
}

export default LoginPage