import Quiz from '../img/quiz.svg';
import React from 'react';
import "./Welcome.css";

const Welcome = () => {
  return (
    <div id='Welcome'>
        <h2>Seja bem vindo(a) ao Quiz</h2>
        <p>Clique no botão abaixo para começar: </p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )

}

export default Welcome