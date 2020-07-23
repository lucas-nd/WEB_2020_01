import React from 'react'

class Questao04 extends React.Component{
    render(props){
        return(
            <div>
                <h1>Nome: {this.props.nome}</h1>
                <h1>Curso: {this.props.curso}</h1>
                <h1>Cidade: {this.props.cidade}</h1>
            </div>
        )
    }
}

export default Questao04;