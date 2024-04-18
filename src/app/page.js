"use client"
import Chart from 'chart.js/auto';
import React, { useState } from 'react';
import Home from './components/Home';
import EvaluationPage from './components/EvaluationPage';


const App = () => {
  const [evaluationType, setEvaluationType] = useState(null);
  const [totalScore, setTotalScore] = useState(0);

  const handleEvaluationTypeSelect = (type) => {
    setEvaluationType(type);
  };

  const handleReturnToHome = () => {
    setEvaluationType(null); // Volver al inicio
  };

  // Define tus preguntas para cada tipo de evaluación
  const evaluations = {
    type1: [
      {
        id: 1,
        text: '1-El aplicar metodologías predictivos ha logrado optimizar la implementación de proyección que más se ajusta en una \nserie cronológica, a fin que las anomalías se detecten antes que ocurran y evitarse mediante las acciones correctivas.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 2,
        text: '2-Como prevé la gestión predeterminada ante la identificación de variables críticas de un proyecto en específico, \nasí como también evaluar escenarios basados en el comportamiento de las variables del mismo.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 3,
        text: '3-Como el conocimiento previo canaliza en el desarrollo y preparación de estrategias imprescindible \npara enfrentar los múltiples cambios y escenarios, de tal manera sea partícipe a lo imprevisto.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 4,
        text: '4-En que nivel de efectividad forja metas, planes y actividades coordinándose con quien corresponde para el logro de ellas y del bien común con la institución.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 5,
        text: '5-Como considera la implementación de los planes de alternativas y pronosticas de los proyectos cronológicamente \nque contribuyan al mejor desarrollo de la misma, ante los cambios del entorno y frente a situaciones críticas.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      
      {
        id: 6,
        text: '6-La asignación oportuna de herramientas e insumo optimiza de manera efectiva el programa de ejecución de actividades del \nque propicien estabilidad, sostenibilidad y mejora continua, con el fin de contribuir al crecimiento de los planes institucional.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 7,
        text: '7-Sus conocimientos y competencias son insumos para entregar productos /servicios de acuerdo \na las expectativas de sus usuarios internos y externos, respondiendo con rapidez y flexibilidad.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 8,
        text: '8-Considera el uso de nuevos modelos',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 9,
        text: '9-Aplicar el trabajo colaborativo de las funciones que compete de su cargo, ha logrado \nel cumpliendo efectivamente con la calidad, cantidad y variedad de tareas existentes.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 10,
        text: '10-Promueve la acción de actuar rápidamente ante pequeñas dificultades/problemas que surgen en el día a día en el cargo colectivamente.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 11,
        text: '11- Supervisa y monitorea  el desarrollo de las tareas y actividades que sus colaboradores \nrealizan para verificar que se les de cumplimiento con eficacia y en el tiempo establecido',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 12,
        text: '12-Conoce y da a conocer las políticas y normativas de la entidad a sus colaboradores y verifica el cumplimiento de estas',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 13,
        text: '13-Gestiona el cumplimiento de los planes, programas y cursos de la entidad por parte de sus colaboradores',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 14,
        text: '14-Dirige a sus colaboradores en el cumplimiento de las metas y objetivos establecidos por la entidad con eficacia y eficiencia ',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 15,
        text: '15-Brinda apoyo a sus colaboradores cuando estos lo necesitan y los orienta para que puedan llegar al logro de sus objetivos ',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 16,
        text: '16-Brinda apoyo a sus colaboradores cuando estos lo necesitan y los orienta para que puedan llegar al logro de sus objetivos ',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 17,
        text: '17-Brinda apoyo a sus colaboradores cuando estos lo necesitan y los orienta para que puedan llegar al logro de sus objetivos ',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 18,
        text: '18-Brinda apoyo a sus colaboradores cuando estos lo necesitan y los orienta para que puedan llegar al logro de sus objetivos ',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 19,
        text: '19-Brinda apoyo a sus colaboradores cuando estos lo necesitan y los orienta para que puedan llegar al logro de sus objetivos ',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 20,
        text: '20-Brinda apoyo a sus colaboradores cuando estos lo necesitan y los orienta para que puedan llegar al logro de sus objetivos ',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      
    ],
    type2: [
      {
        id: 1,
        text: '1-Orienta la planeación emanada por el alto nivel jerárquico, del que efectúa los lineamientos que operan para las diferente rutas de actividades, desarrollo, gestión, estrategias, previsión, solución durante su ejecución, para obtener mejores resultados entregables y completos a largo plazo.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 2,
        text: '2-La efectividad de anticipar el proceso del plan a ejecutar contribuye a que todas las situaciones, cambios, a los sucesos futuros que puedan llegar a afectar a la institución, ya sea de forma negativa como positiva, enfrentarlos para catalizarlos a un bien común.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 3,
        text: '3-La alta preparación y responsabilización, los procesos que canaliza la planificación, le genera oportunidad de estandarizar y certificar la calidad de los objetivos institucionales con la cohesión de los equipos.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 4,
        text: '4-En que nivel de efectividad los planes institucionales basadas en cuestiones de carácter objetivas y subjetivas, que transforma, soluciona y mitiga los efectos de los posibles problema (s) dependiendo de la magnitud que se enfrentan le contribuye para alcanzar resultados favorables.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 5,
        text: '5-La estipulación de lineamientos que contendrá el plan institucional, su proceso de ejecución es fundamental en su contribución a seguir orientados en un proceso racional en el cual se fija las metas, soluciones, previsiones especificas de cualquier actividad para llegar hasta ella.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 6,
        text: '6-La formulación de planes cotidianos son enfocados por la orientación institucional, las cuales estas son interpretados a una lineación sugeridos por los planes de corto y largo plazo, en asignación de actividades programables con precisión.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 7,
        text: '7-Las modalidades de control tanto interno, externo y gestión, han permitido a determinar y asignar los recursos que serán necesarios a la ejecución de objetivos de las combinaciones de planes en las diversas rutas, así como las unidades que son indispensable la involucración en el desarrollo de los proyectos de la misma.	',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 8,
        text: '8-La implementación del sistema de control interno ha logrado salvaguardar sus recursos y verificar la veracidad de sus transacciones económicas para así apoyar y promover la consecución incorrecta de sus objetivos, a fin que la institución alcance los planes que fueron pautados y fueron programados con el presupuesto asignado.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 9,
        text: '9-El aplicar el proceso de control de gestión ha contribuido en los objetivos primordiales de la rutas de actividades y de la institución, que están enmarcadas para guiar eficazmente a lo planeado con el mejor uso de los recursos.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 10,
        text: '10-El integrar el sistema inspección/supervisión dentro de los planes cotidianos y corto plazo ha permitido que lo ejecutado va de acuerdo con los objetivos de los planes prefijados por la institución de largo plazo, con el fin de realizar adaptaciones y ajustes en los conocimientos de la misma',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 11,
        text: '11-La ejecución de realizar auditorias eventuales en las diferentes unidades, contribuido permitir verificar el adecuado rendimiento, uso y manejo de los recursos para los fines establecidos',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 12,
        text: '12-La utilización de uso de técnicas financiera, ha permitido medir resultados, planificar ajustes, y tomar decisiones.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 13,
        text: '13-El monitoreo de ingresos y egresos de la institución ha priorizado el verificar los posibles desviaciones de lo presupuestado, se detecten y evitarse mediante las acciones correctivas.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 14,
        text: '14-En qué nivel de efectividad forja metas, planes y actividades coordinándose con quien corresponde para el logro de ellas y del bien común con la institución.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 15,
        text: 'Mantiene sus emociones y su comportamiento bajo control, incluso durante situaciones de mucha presión',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 16,
        text: '16-Contribuye a que el directorio trabaje como equipo, rescatando la diversidad de opiniones y manejando adecuadamente los conflictos.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 17,
        text: '17-Maneja los conflictos adecuadamente y toma la iniciativa en la resolución de estos',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 18,
        text: '18-Orienta la planeación emanada por el alto nivel jerárquico, del que efectúa los lineamientos que operan para las diferente rutas de actividades, desarrollo, gestión, estrategias y previsión durante su ejecución.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 19,
        text: '19-Anticipa con efectividad los posibles cambios al plan a ejecutar  y contribuye a que estos impacten de manera positiva y no negativa a la entidad',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      {
        id: 20,
        text: '20-Hace uso de técnicas financieras permitiendo medir resultados, planificar ajustes y tomar decisiones.',
        options: [
          { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
          { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
          { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
          { id: 4, text: 'Regular', correct: true, ponderation: 2 },
          { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
        ],
      },
      
    ],
      type3: [
        {
          id: 1,
          text: '1-Transmite de forma fluida, comprensible y adecuada la información necesaria a sus colaboradores',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 2,
          text: '2-Utiliza los diferentes canales de comunicación disponibles de forma adecuada para comunicarse con rapidez con sus colaboradores',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 3,
          text: '3-La información es transmitida con facilidad y claridad a todo el personal involucrado',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 4,
          text: '4-Facilita la comunicación externa e interna implementando diferentes canales en el plan de comunicación.',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 5,
          text: '5-Se comunica de forma regular con sus colaboradores y presta atención a sus opiniones y necesidades',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 6,
          text: '6-Facilita e implementa dar incentivos a sus colaboradores por el logro de metas u objetivos de la entidad',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 7,
          text: '7-Facilita un ambiente de armonía entre sus colaboradores en el desarrollo de las actividades laborales',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 8,
          text: '8-Implementa programas de motivación que desarrollen confianza y lealtad en sus colaboradores hacía la empresa y así retener el talento humano',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 9,
          text: '9-Reconoce, valora, recompensa y fomenta el conocimiento y logro de sus colaboradores',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 10,
          text: '10-Posee la capacidad de motivar y dirigir a su personal en el logro de las metas y objetivos de la empresa',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 11,
          text: '11-Dirige a sus colaboradores en el cumplimiento adecuado de metas y objetivos a alcanzar por la entidad',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 12,
          text: '12-Capacidad para dirigir e influir en sus colaboradores y motivarlos para en el desarrollo de sus habilidades, conocimientos y tareas asignadas',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 13,
          text: '13-Organiza y delega actividades a su personal obteniendo su colaboración y llegando al cumplimiento de estas',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 14,
          text: '14-Desarrolla, guía, dirige, inspira y enseña a sus colaboradores a aprender y adaptarse a las diferentes situaciones que se den en sus actividades laborales',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 15,
          text: '15-Gestiona y supervisa las diferentes actividades y tareas de sus colaboradores y corrige si es necesario',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 16,
          text: '16-Supervisa y monitorea  el desarrollo de las tareas y actividades que sus colaboradores realizan para verificar que se les de cumplimiento con eficacia y en el tiempo establecido',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 17,
          text: '17-Conoce y da a conocer las políticas y normativas de la entidad a sus colaboradores y verifica el cumplimiento de estas',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 18,
          text: '18-Gestiona el cumplimiento de los planes, programas y cursos de la entidad por parte de sus colaboradores',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 19,
          text: '19-Dirige a sus colaboradores en el cumplimiento de las metas y objetivos establecidos por la entidad con eficacia y eficiencia ',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
        {
          id: 20,
          text: '20-Brinda apoyo a sus colaboradores cuando estos lo necesitan y los orienta para que puedan llegar al logro de sus objetivos ',
          options: [
            { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
            { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
            { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
            { id: 4, text: 'Regular', correct: true, ponderation: 2 },
            { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
          ],
        },
      ],
        type4: [
          {
            id: 1,
            text: '1-La toma de decisiones y planificación de estas se realiza unilateralmente sin tener en cuenta la opinión del personal.',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 2,
            text: '2-Posee con un enfoque sumamente estructurado e inflexible permitiéndole ser eficiente en procesos a corto plazo.',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 3,
            text: '3-Conocimiento sobre la gestión, planificación y control de las diferentes acciones que deben acometer los colaboradores para el cumplimiento de las tareas, metas u objetivos siendo recompensados al alcanzarlas, mientras que el fallar en estas se castiga.',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 4,
            text: '4-Las decisiones sobre las acciones a seguir por la organización se toman considerando la opinión del personal.',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 5,
            text: '5-Dirige y comparte las funciones de dirección de los colaboradores a cargo, alentando (estimulando) la participación de estos en la determinación de las metas y en el planteamiento y dirección de las actividades del grupo',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 6,
            text: '6-Utiliza métodos de motivación a fin de lograr que los empleados a participen y trabajen de manera colectiva en el cumplimiento de los objetivos y metas.',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 7,
            text: '7-Toma en consideración la opinión del personal bajo su cargo en la toma de decisiones importantes y las acciones a seguir por la entidad',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 8,
            text: '8-Realiza reuniones frecuentes con sus colaboradores con el fin de conocer sus avances y sugerencias sobre las tareas asignadas',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 9,
            text: '9-Influye positivamente incluir a sus colaboradores en la toma de decisiones',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 10,
            text: '10-Se relaciona activamente con sus colaboradores alentandolos y dejandolos tomar sus propias decisiones sobre las actividades que realizan',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 11,
            text: '11-Posee habilidades gerenciales para autoliderarse y a otros de manera eficiente en el logro de objetivos y metas',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 12,
            text: '12-Reflexiona sobre sus acciones y el impacto que estas tienen sobre sus colaboradores ',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 13,
            text: '13-Se autoevalua constantemente a fin de mejorar y corregir errores para ser un mejor lider',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 14,
            text: '14-Se pone metas y objetivos personales y se esfuerza en el cumplimiento de estos',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 15,
            text: '15-Se reune con sus empleados de manera individual para conocer sus opiniones e inquietudes sobre su trabajo',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 16,
            text: '16-Fomenta el trabajo en equipo entre sus colaboradores así como el respeto mutuo entre ellos y ayuda en la realización de las actividades asignadas',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 17,
            text: '17-Garantiza que las relaciones de trabajo sean armoniosas, cooperativas y productivas a fin de cumplir con las metas y objetivos en equipo',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 18,
            text: '18-Contribuye y supervisa la realización de las diferentes actividades de la entidad ',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 19,
            text: '19-Influye positivamente en sus colaboradores y los mantiene motivados para que realicen sus actividades con eficiencia',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
          {
            id: 20,
            text: '20-Se relaciona con el personal a su cargo de manera constante motivando y alentando su desarrollo personal y profesional',
            options: [
              { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
              { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
              { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
              { id: 4, text: 'Regular', correct: true, ponderation: 2 },
              { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
            ],
          },
        ],
          type5: [
            {
              id: 1,
              text: '1-Posee la capacidad de dirigir, influir, motivar, planear, elaborar políticas, practicas, proyectos y programas en materia de Gestión de Recursos Humanos a fin de cumplir con los objetivos de la institución',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 2,
              text: '2-¿Qué tan eficientemente se asignan los recursos disponibles de la institución?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 3,
              text: '3-¿Qué tan bien se fomenta el trabajo en equipo y la colaboración entre departamentos?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 4,
              text: '4-Utiliza lenguaje fluido, comprensible y adecuado a la hora de transmitir la información a sus colaboradores.',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 5,
              text: '5-¿Cómo manejo situaciones de conflicto dentro del equipo y cómo resuelvo los problemas de manera eficiente?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 6,
              text: '6-¿Cómo calificarías la comunicación efectiva dentro del equipo de trabajo bajo tu responsabilidad?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 7,
              text: '7-¿Qué tan efectivas son las estrategias de resolución de problemas y toma de decisiones',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 8,
              text: '8-¿Cómo calificarías la capacidad de adaptación a cambios en el entorno laboral?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 9,
              text: '9-¿Cómo calificarías la capacidad de delegar responsabilidades de manera efectiva?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 10,
              text: '10-¿Cómo calificarías la capacidad de identificar y aprovechar oportunidades de crecimiento ?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 11,
              text: '11-¿Qué tan bien se establecen y cumplen los objetivos a corto plazo?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 12,
              text: '12-¿Qué tan bien se establecen y cumplen los objetivos a largo plazo?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 13,
              text: '13-Utiliza las técnicas o métodos de motivación para reducir la resistencia al cambio en los colaboradores.',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 14,
              text: '14-¿Qué tan bien se gestionan y resuelven los conflictos internos?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 15,
              text: '15-¿Qué estrategias implemento para promover el desarrollo profesional y el bienestar de mis empleados?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 16,
              text: '16-¿Cómo evaluarías la capacidad de liderazgo para motivar y guiar al equipo?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 17,
              text: '17-Aplica métodos sistemáticos de toma de decisión para la solución de los problemas en el ejercicio profesional.',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 18,
              text: '18-¿Conocimiento sobre las políticas y procesos de la empresa de las que son parte ?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 19,
              text: '19-Demuestra altos conocimientos de su especialidad, renovando y manteniendo de manera constante el interés por aprender y preocupado de dirigir de manera efectiva su equipo de trabajo.',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
            {
              id: 20,
              text: '20-¿Qué tan alineadas están las acciones y decisiones gerenciales con la visión y los valores de las empresas a las que pertenece?',
              options: [
                { id: 1, text: 'Excelente', correct: true, ponderation: 5 },
                { id: 2, text: 'Muy Bueno', correct: true, ponderation: 4 },
                { id: 3, text: 'Bueno', correct: true, ponderation: 3 },
                { id: 4, text: 'Regular', correct: true, ponderation: 2 },
                { id: 5, text: 'Deficiente', correct: true, ponderation: 1 },
              ],
            },
          ]
    // Define otros tipos de evaluación aquí
  };

   return (
    <div>
      {!evaluationType ? (
        <Home handleEvaluationTypeSelect={handleEvaluationTypeSelect} />
      ) : (
        <EvaluationPage
          questions={evaluations[evaluationType]}
          totalScore={totalScore}
          setTotalScore={setTotalScore}
          handleReturnToHome={handleReturnToHome} // Pasar la función handleReturnToHome como prop
        />
      )}
    </div>
  );
};

export default App;
