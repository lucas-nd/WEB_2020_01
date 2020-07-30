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

export default function Arena(props){
    return(
        <table class="table table-dark table-bordered">
            <thead>
                <tr>
                    <th scope="col">Hero</th>
                    <th scope="col">x</th>
                    <th scope="col">Enemy</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td><Hero name="Goku" img={Goku}/></td>

                <td>VS</td>

                <td><Enemy name="Freeza" img={Freeza}/></td>
            </tr>
            <tr>
                <td colspan="3">Arena: {props.arena}</td>
            </tr>
            </tbody>
        </table>
    )
}