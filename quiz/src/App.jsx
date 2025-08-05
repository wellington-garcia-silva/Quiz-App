import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';

import Welcome from './components/Welcome';
import Question from './components/Question';

import './App.css'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({
      type: "CHANGE_STAGE",
    });
  }, []);


  return (
   <div className='App'>
    <h1>Quiz de Progamação</h1>
      {quizState.gameStage === "start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
   </div>
  );
}

export default App;
