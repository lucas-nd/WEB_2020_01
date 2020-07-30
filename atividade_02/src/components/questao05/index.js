import React from 'react'

import styled from 'styled-components'

import Arena from './Arena.jsx'

const Battle = styled.div`
    width: 500px;
`;

export default function questao05(){
    return(
        <Battle>
            <h1>Questão 05</h1>
            <div class="alert alert-danger" role="alert">
                <h1>Batalha!</h1>
            </div>
            <Arena arena="AllianzPark"/>
        </Battle>
    )
}