import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import "./Question.css";

import Option from "../components/Option";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
     dispatch({
      type: "CHANGE_ANSWER",
      payload: {answer: currentQuestion.option, option},
     });
  }
 

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
        </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option option={option} 
          key={option} 
          answer={currentQuestion.answer}
          selectOption={() => onSelectOption()}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTIONS" })}>Continuar</button>
      )}
    </div>
  )
}

export default Question

