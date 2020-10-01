import React from 'react'

import { connect } from 'react-redux'

import './styles.css'

import { mudarNumero01, mudarNumero02 } from '../../store/actions'

function Tela( { numeros, dispatch } ){
    return(
        <div className="tela">
            <input className="inputs" value={numeros.numero_01} onChange={(e) => dispatch(mudarNumero01(Number(e.target.value)))}></input>

            <input className="inputs" value={numeros.numero_02} onChange={(e) => dispatch(mudarNumero02(Number(e.target.value)))}></input>
        </div>
    )
}

export default connect(state => ({ numeros: state }))(Tela)