import React from 'react'

export default function Questao03(props){
    return(
        <div>
            <h1>Nome: {props.nome}</h1>
            <h1>Curso: {props.curso}</h1>
            <h1>Cidade: {props.cidade}</h1>
        </div>
    )
}