import { useMemo, useState } from "react";

import { GlossaryItem, glossary } from "./glossary";
import { getAnswers, toShuffledArray } from "./utils";
import { Question } from "./components/Question";
import { Answer } from "./components/Answer";
import { QuizState } from "./models";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Progress } from "./components/Progress";
import { Container } from "./components/Container";

function App() {
  const [count, setCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [answer, setAnswer] = useState<number>(-1);
  const [quizState, setQuizState] = useState<QuizState>(QuizState.BeforeStart);

  const [questions, setQuestions] = useState<GlossaryItem[]>(
    toShuffledArray(glossary)
  );

  const answers = useMemo(
    () => getAnswers(0, questions.length - 1, count),
    [count]
  );

  const selectAnswerHandler = (id: number) => {
    if (id === count) {
      setScore((score) => score + 1);
    }
    setAnswer(id);
    setQuizState(QuizState.AnswerSelected);
  };

  const startQuizHandler = () => {
    setQuizState(QuizState.Thinking);
  };

  const nextHandler = () => {
    setCount((count) => count + 1);
    setAnswer(-1);
    setQuizState(QuizState.Thinking);
  };

  const restartHandler = () => {
    setQuestions(toShuffledArray(glossary));
    setCount(0);
    setScore(0);
    setQuizState(QuizState.BeforeStart);
  };

  console.log(answers);

  return (
    <>
      <Header result={score ? Math.floor((score / (count + 1)) * 100) : 0} />
      <main>
        <Container>
          <>
            {quizState === QuizState.BeforeStart ? (
              <div className="flex justify-center py-40">
                <button className="start-btn" onClick={startQuizHandler}>
                  Start
                </button>
              </div>
            ) : null}
            {quizState === QuizState.Thinking ||
            quizState === QuizState.AnswerSelected ? (
              <div className="py-5">
                <Question text={questions[count].term} />
                <p className="font-semibold mb-2">Choose correct variant:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:auto-rows-fr">
                  {answers.map((id, idx) => (
                    <Answer
                      key={id}
                      text={questions[id].description}
                      id={id}
                      onSelect={selectAnswerHandler}
                      quizState={quizState}
                      idx={idx}
                      answer={answer}
                      count={count}
                    />
                  ))}
                </div>
                {quizState === QuizState.AnswerSelected}
                <div className="flex py-5 justify-center gap-5">
                  <button
                    className="rounded-full border-2 border-red-700 bg-red-700 hover:bg-transparent py-2 px-4 text-white hover:text-red-700 transition-colors"
                    onClick={restartHandler}
                  >
                    Restart
                  </button>
                  <button
                    className="rounded-full border-2 border-sky-700 bg-sky-700 hover:bg-transparent py-2 px-4 text-white hover:text-sky-700 transition-colors disabled:bg-neutral-400 disabled:border-neutral-400 disabled:text-white"
                    disabled={
                      quizState === QuizState.Thinking ||
                      count + 1 === questions.length
                    }
                    onClick={nextHandler}
                  >
                    Next Question
                  </button>
                </div>
                <Progress current={count} total={questions.length} />
              </div>
            ) : null}
          </>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
