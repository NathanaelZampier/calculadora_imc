import { useState } from 'react'
import './Calculadora.css'


const Calculadora = () => {

    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);

    const calculaImc = () => {
        if (altura === 0) return 0;

        const imc = peso / (altura * altura);
        return Math.round(imc);
    }

    return (
        <div className="container">
            <h1>Bem vindo a calculadora de IMC</h1>
                    <form className='form'>
                        <h2>Insira os dados abaixo</h2>
                        <input type="number" placeholder='peso em kilogramas' onChange={evento => setPeso(evento.target.value)} />
                        <input type="number" placeholder='altura em metros' onChange={evento => setAltura(evento.target.value)} />
                        <p>O resultado é: {calculaImc()} </p>
                        <br />
                        <p>Tabela abaixo para conferência</p>
                        <br />
                            <p>Menor que 18,5: Magreza. </p>
                            <p>18,5 a 24,9: Peso Normal.</p>
                            <p>25,0 a 29,9: Sobrepeso.</p>
                            <p>30,0 a 39,9: Obesidade.</p>
                            <p>Maior que 40,0: Obesidade Grave. </p>
                    </form>
        </div>
    )
}

export default Calculadora