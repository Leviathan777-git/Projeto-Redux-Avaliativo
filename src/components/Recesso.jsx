import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

function Recesso(props) {
    const { number } = props;

    return (
        <Card title="Está chegando..." green>
            <div className='Sorteio'>
                <span >
                    <span> Estarei de Recesso em {number} dias </span>
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

export default connect(mapStateToProps)(Recesso)