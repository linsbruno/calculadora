import { useState } from 'react';
import './App.css' 

const App = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [imc, setImc] = useState(0);

  const calcularIMC = () => {
    const alt = altura / 100;
    const imcCalculado = peso / (alt * alt);
    setImc(imcCalculado);
  }
  const getClassForIMC = () => {
    if (imc < 18.5) {
      return 'abaixo-peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
      return 'peso-ideal';
    } else if (imc >= 25 && imc <= 29.9) {
      return 'sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
      return 'obesidade-grau-1';
    } else if (imc >= 35 && imc <= 39.9) {
      return 'obesidade-grau-2';
    } else {
      return 'obesidade-grau-3';
    }
  }

  return (
    <>
      <div>
        <h1>Calculadora IMC</h1>
        <div>
          <input type="number" placeholder="Digite seu peso" onChange={e => setPeso(e.target.value)} />
          <input type="number" placeholder="Digite sua altura" onChange={e => setAltura(e.target.value)} />
          <button onClick={calcularIMC}>Calcular IMC</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>IMC</th>
                <th>Classificação</th>
              </tr>
            </thead>
            <tbody>
              <tr className={getClassForIMC()}>
                <td>{imc.toFixed(2)}</td>
                <td >{getClassForIMC()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;