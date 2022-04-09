import './App.css';
import Desafio from './components/Desafio.jsx'
import Numeros from './components/Numero';
import Propriedades from './components/Propriedades';
import Recesso from './components/Recesso';
import Sorteio from './components/Sorteio';
function App() {
  return (
    <div className="App">
      <h1>PROJETO AVALIATIVO REACT-REDUX 1º BIMESTRE</h1>
      <div className='linha'>
        <Desafio></Desafio>
      </div>
      <div className='linha'>
        <Numeros></Numeros>
      </div>
      <div className='linha'>
        <Propriedades titulo="QUAL A SUA NOTA?" aluno="GABRIEL DE CASTRO"></Propriedades>
      </div>
      <div className='linha'>
        <Sorteio></Sorteio>
      </div>
      <div className='linha'>
        <Recesso></Recesso>
      </div>

    </div>
  );
}

export default App;
