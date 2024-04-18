"use client"
import React from 'react';

const Home = ({ handleEvaluationTypeSelect }) => {
  return (
    <div>
        <div className='parrafo'> 
      <h1>Aplicación de Evaluación</h1>
      <h2>Selecciona el tipo de evaluación:</h2>
      </div>
      
      <button className="evaluation-button" onClick={() => handleEvaluationTypeSelect('type1')}>HERRAMIENTA GERENCIAL FORMA EN QUE SE ADMINISTRA EL CONOCIMIENTO</button>
      <button className="evaluation-button" onClick={() => handleEvaluationTypeSelect('type2')}>HERRAMIENTA GERENCIAL ADMINISTRATIVA  SOBRE COMO SE DIRIGE EL CONOCIMIENTO</button>
      <button className="evaluation-button" onClick={() => handleEvaluationTypeSelect('type3')}>HERRAMIENTA GERENCIAL ADMINISTRATIVA MANERA COMO SE DIRIGE EL CONOCIMIENTO</button>
      <button className="evaluation-button" onClick={() => handleEvaluationTypeSelect('type4')}>HERRAMIENTA GERENCIAL ADMINISTRATIVA  ESTILOS DE LIDERAZGO EN EL CONOCIMIENTO</button>
      <button className="evaluation-button" onClick={() => handleEvaluationTypeSelect('type5')}>HERRAMIENTA GERENCIAL ADMINISTRATIVA COMO SE GESTIONA DE MANERA EFECTIVA EL CONOCIMIENTO</button>

      <div></div>
      
    </div>
    
  );
};

export default Home;