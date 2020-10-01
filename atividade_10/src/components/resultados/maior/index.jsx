import React from 'react'

import { connect } from 'react-redux'

import '../styles.css'

function Maior( { numeros } ){
    return(
        <div className="maior">
            <h1>Maior</h1>
            <h1>{numeros.numero_01 > numeros.numero_02 ? numeros.numero_01 : numeros.numero_02}</h1>
        </div>
    )
}

export default connect(state => ({ numeros: state }))(Maior)