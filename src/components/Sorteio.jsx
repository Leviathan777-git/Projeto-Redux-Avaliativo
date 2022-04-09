import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

function Sorteio(props) {
    const { number } = props;
    const aleatorio = parseInt(Math.random() * (number - 0)) + 0

    return (
        <Card title={ `Sorteio de Números de 0 à ${number}` } purple>
            <div className='Sorteio'>
                <span >
                    <span> Resultado: </span>
                    <span> {aleatorio} </span>
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

export default connect(mapStateToProps)(Sorteio)