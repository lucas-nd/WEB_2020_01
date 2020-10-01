import React from 'react'

import { connect } from 'react-redux'

import '../styles.css'

function Multiplicacao( { numeros } ){
    return(
        <div className="mult">
            <h1>Multiplicação</h1>
            <h1>{numeros.numero_01 * numeros.numero_02}</h1>
        </div>
    )
}

export default connect(state => ({ numeros: state }))(Multiplicacao)