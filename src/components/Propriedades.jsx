import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

function Propriedades (props) {
    const {number} = props;

    return(
        <Card title={props.titulo} {...props} yellow>
            <div className='Propriedades'> 
                <span >
                    <span> {props.aluno} Sua nota é: {number} </span>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        number: state.numeros.number
    }
}

export default connect(mapStateToProps) (Propriedades)