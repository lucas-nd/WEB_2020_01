import React from 'react'

import Soma from './soma'
import Multiplicacao from './multiplicacao'
import Maior from './maior'

import './styles.css'

function Resultados( { numeros } ){
    return(
        <div className="resultados">
            <Soma />
            <Multiplicacao />
            <Maior />
        </div>
    )
}

export default Resultados