import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Timer from '../Timer/Timer'; // Timer component
import style from './SpeedBoost.module.css'; 

export default function SpeedBoost() {
  
  const { min, max, count, timer } = useSelector(s => s.input);
  
  
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  
  useEffect(() => {
    const a = +min, b = +max, c = +count;
    if (a && b && c) {
      const qs = Array.from({ length: c }, () => {
        const n1 = Math.floor(Math.random() * (b - a + 1)) + a;
        const n2 = Math.floor(Math.random() * (b - a + 1)) + a;
        return { n1, n2, correct: n1 * n2 };
      });
      setQuestions(qs);
    }
  }, [min, max, count]);

  
  const doSubmit = () => setSubmitted(true);

  
  const handleTimeUp = () => {
    setSubmitted(true);
  };

  
  const { correctCount, pct } = (() => {
    const correctCount = questions.reduce((acc, q, i) =>
      acc + (parseInt(answers[i]) === q.correct ? 1 : 0), 0);
    const pct = questions.length ? (correctCount / questions.length * 100).toFixed(2) : 0;
    return { correctCount, pct };
  })();

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
      {!submitted && <Timer minutes={+timer} onTimeUp={handleTimeUp} />}
        <h2>Multiplication Exam</h2>
      
      </div>

      <div className={style.questionsContainer}>
        {questions.map((q, i) => {
          const ua = answers[i], correct = q.correct, isCorrect = +ua === correct, notAns = ua == null || ua === '';

          return (
            <div key={i} className={style.questionBox}>
              <div className={style.questionText}>
                {q.n1} × {q.n2}
                {submitted && (
                  <span className={style.resultIcon}>
                    {notAns ? '🟡' : isCorrect ? '✔️' : '❌'}
                  </span>
                )}
              </div>
              <input
                type="number"
                disabled={submitted}  
                value={ua || ''}
                onChange={e => setAnswers({ ...answers, [i]: e.target.value })}
                className={style.answerInput}
              />
              {submitted && (
                <div className={style.answerResult}>
                  {notAns
                    ? <span className={style.notSolved}>Not Solved</span>
                    : <span className={style.correctAnswer}>{correct}</span>
                  }
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted && (
        <button onClick={doSubmit} className={style.submitBtn}>Submit</button>
      )}

      {submitted && (
        <div className={style.resultSummary}>
          <p>{correctCount} / {questions.length} correct</p>
          <p>Score: {pct}%</p>
        </div>
      )}
    </div>
  );
}
