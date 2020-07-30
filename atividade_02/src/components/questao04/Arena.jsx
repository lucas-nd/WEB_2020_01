import React from 'react'

import Goku from '../../assets/Goku.png'
import Freeza from '../../assets/Freeza.png'

function Hero(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={Goku} alt="Hero" width="100px"/>
            <h2>{props.arena}</h2>
        </div>
    )
}

function Enemy(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={Freeza} alt="Enemy" width="100px"/>
            <h2>{props.arena}</h2>
        </div>
    )
}

function Arena( props ){
    return(
        <div>
            <h1>Questão 04</h1>
            {React.Children.map(props.children, arena => {
                return React.cloneElement(arena, {...props})
            })}
        </div>
    )
}

export { Arena, Hero, Enemy }