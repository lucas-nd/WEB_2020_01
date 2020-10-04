import React from 'react'

import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'

import { deslogar } from '../store/actions'

function Header({ dados, dispatch }){
    const history = useHistory()

    function logoff(){
        dispatch(deslogar())
        history.push('/login')
    }

    return(
        <div className="header">
            <h1>Seja bem-vindo <strong>{dados.user}</strong></h1>
            <button className="deslogarButton" onClick={logoff}>Deslogar</button>
        </div>
    )
}

export default connect(state => ({ dados: state }))(Header)