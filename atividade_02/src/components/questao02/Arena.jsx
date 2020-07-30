import React from 'react'

import { HeroIMG } from "./Constantes.js"
import { EnemyIMG } from './Constantes.js'

function Hero(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt="Hero" width="100px"/>
        </div>
    )
}

function Enemy(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} alt="Enemy" width="100px"/>
        </div>
    )
}

export default function Arena(){
    return(
        <div>
            <h1>Questão 02</h1>
            <Hero name="Goku" img={ HeroIMG }/>
            <Enemy name="Freeza" img={ EnemyIMG }/>
        </div>
    )
}