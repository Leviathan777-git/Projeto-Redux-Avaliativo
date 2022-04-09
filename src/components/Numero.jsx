import React from 'react';
import { connect } from 'react-redux';
import './Numero.css';
import Card from './Card';
import { alterarNumero } from '../actions/numeros';

function Numeros (props) {
    const {number} = props;
    return(
        <Card title="DESAFIO REACT-Escolha um número:" blue>
            <div className='Numeros'> 
                <span >
                    <span>Numero:</span>
                    <input type="number" value={number} onChange={e => props.alterandoNumero(+e.target.value)} />
                </span>
            </div>
        </Card>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        alterandoNumero(novoNumero) {
            const action = alterarNumero(novoNumero)
            dispatch(action)
        },

    }
}

function mapStateToProps(state) {
    return {
        number: state.numeros.number
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Numeros);