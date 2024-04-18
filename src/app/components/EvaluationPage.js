"use client"
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const EvaluationPage = ({ questions, totalScore, setTotalScore, handleReturnToHome }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [previousEvaluations, setPreviousEvaluations] = useState([]);

  const saveEvaluation = (evaluation) => {
    const evaluations = JSON.parse(localStorage.getItem('evaluations')) || [];
    evaluations.push(evaluation);
    localStorage.setItem('evaluations', JSON.stringify(evaluations));
  };
/*
// Función para limpiar el localStorage
const clearLocalStorage = () => {
  localStorage.removeItem('evaluations');
};

// Llamar a la función para limpiar localStorage al cargar la página
useEffect(() => {
  clearLocalStorage();
}, []);
  */
  const getPreviousEvaluations = () => {
    const evaluations = JSON.parse(localStorage.getItem('evaluations')) || [];
    setPreviousEvaluations(evaluations);
  };

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  const handleSubmit = () => {
    const unansweredQuestions = questions.filter((question) => !answers[question.id]);
    if (unansweredQuestions.length > 0) {
      alert('Por favor, responde todas las preguntas antes de enviar.');
      return;
    }

    let obtainedScore = 0;

    questions.forEach((question) => {
      const selectedAnswer = answers[question.id];
      if (selectedAnswer) {
        obtainedScore += selectedAnswer.correct ? selectedAnswer.ponderation : 0;
      }
    });

    setSubmitted(true);
    setTotalScore(obtainedScore);

    saveEvaluation({ questions, totalScore: obtainedScore });
  };

  useEffect(() => {
    getPreviousEvaluations();
  }, []);

  useEffect(() => {
    if (submitted) {
      const ctx = document.getElementById('pieChart');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: questions.map((question) => question.text),
          datasets: [{
            label: 'Ponderación',
            data: questions.map((question) => answers[question.id] ? answers[question.id].ponderation : 0),
            backgroundColor: questions.map((question) => {
              const ponderation = answers[question.id] ? answers[question.id].ponderation : 0;
              return ponderation >= 3 ? 'blue' : 'red'; // Cambia los colores según la ponderación
            }),
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
          },
        },
      });
    }
  }, [submitted, questions, answers]);

  return (
    <div>
      {!submitted && (
        <>
          <h2 className='her'>Evaluación</h2>
          {questions.map((question, index) => (
            <div style={{backgroundColor: '#D84E30', margin: '10px 20px', borderRadius: '25px', }}>
  <div key={question.id}>
    <h3 style={{ whiteSpace: 'pre-line', textAlign: 'center' , fontWeight: '400', marginBottom:'10px', marginTop:'15px'}}>{question.text}</h3>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
     {question.options.map((option) => (
  <div key={option.id} className="option" style={{ margin: '5px', border: '1px solid black', padding: '5px', borderRadius: '5px', cursor: 'pointer' }} onClick={() => handleAnswerSelect(question.id, option)}>
    <input
      type="radio"
      id={option.id}
      name={question.id}
      value={option.text}
      checked={answers[question.id] === option} // Marcar el radio button si la opción está seleccionada
      onChange={() => handleAnswerSelect(question.id, option)}
      style={{ marginRight: '5px' }}
    />
    <div style={{ display: 'inline' }}>{option.text}</div>
  </div>
))}
</div>
    </div>
    {index < questions.length - 1 && <br />}
  </div>
))}

          <button className="evaluation-button" onClick={handleSubmit}>Enviar respuestas</button>
          <button className="evaluation-button" onClick={handleReturnToHome}>Cancelar evaluación</button>
        </>
      )}
      {submitted && (
        <div className="evaluation-complete-container">
          <h2>¡Evaluación completada!</h2>
          <div className="graph-container">
            <div id="chartContainer" style={{ width: '400px', height: '400px', margin: '0 auto' }}>
              <canvas id="pieChart"></canvas>
            </div>
          </div>
          <div className="score-container" style={{ textAlign: 'center' }}>
            <div className='div1'>Nota obtenida: {totalScore}</div>
            <button className="evaluation-button" onClick={handleReturnToHome}>Volver al inicio</button>
          </div>
        </div>
      )}
      <div>
        <h2>Evaluaciones anteriores</h2>
        <ul>
          {previousEvaluations.map((evaluation, index) => (
            <li key={index}>
              <p>Puntaje obtenido: {evaluation.totalScore}</p>
              <ul>
                {evaluation.questions.map((question) => (
                  <li key={question.id}>
                    <p>Pregunta: {question.text}</p>
                    <p>Respuesta: {question.options.find((option) => option.id === answers[question.id])?.text}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default EvaluationPage;

