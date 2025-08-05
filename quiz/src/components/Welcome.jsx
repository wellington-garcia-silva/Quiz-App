import Quiz from '../img/quiz.svg';
import  { useContext } from 'react';
import { QuizContext } from '../context/quiz';


import "./Welcome.css";

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  return (
    <div id='Welcome'>
        <h2>Seja bem vindo(a) ao Quiz</h2>
        <p>Clique no botão abaixo para começar: </p>
        <button onClick={() => dispatch({ type: "CHANGE_STAGE"})}>Iniciar</button>
        <img src={Quiz} alt="Início do Quiz" />
    </div>
  )

}

export default Welcome