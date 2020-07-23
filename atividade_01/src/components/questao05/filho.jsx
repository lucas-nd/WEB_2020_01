import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

class Questao05 extends React.Component{
    render(props){
        return(
            
            <div class="card" style={{width: '18rem'}}>
                <div class="card-header">
                    Questão 05
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Nome: {this.props.nome}</li>
                    <li class="list-group-item">Curso: {this.props.curso}</li>
                    <li class="list-group-item">Cidade: {this.props.cidade}</li>
                </ul>
            </div>
        )
    }
}

export default Questao05;