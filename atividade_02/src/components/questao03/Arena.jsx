import React from 'react'

import Goku from '../../assets/Goku.png'
import Freeza from '../../assets/Freeza.png'

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
            <Hero name="Goku" img={ Goku }/>
            <Enemy name="Freeza" img={ Freeza }/>
        </div>
    )
}