import React from 'react'

import { connect } from 'react-redux'

import '../styles.css'

function Soma( { numeros } ){
    return(
        <div className="soma">
            <h1>Soma</h1>
            <h1>{numeros.numero_01 + numeros.numero_02}</h1>
        </div>
    )
}

export default connect(state => ({ numeros: state }))(Soma)