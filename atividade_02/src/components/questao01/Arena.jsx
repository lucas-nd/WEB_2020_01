import React from 'react'

import Goku from '../../assets/Goku.png'
import Freeza from '../../assets/Freeza.png'

function Hero(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={ Goku } alt="Hero" width="100px"/>
        </div>
    )
}

function Enemy(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={ Freeza } alt="Enemy" width="100px"/>
        </div>
    )
}

export default function Arena(){
    return(
        <div>
            <h1>Questão 01</h1>
            <Hero name="Goku"/>
            <Enemy name="Freeza"/>
        </div>
    )
}