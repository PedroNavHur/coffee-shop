// Prueba Logica JavaScript
// Autor: @PedroNavarrete

// He probado los scripts en Node.js

/* Basado en un cuestionario con N preguntas y M respuestas por pregunta,
   crear un script en javascript que realice lo siguiente */

const questionnaire = [
  {
      questionId: 1,
      questionName: 'What is your favorite color?',
      answers: [
          { answerName: 'Red', answerId: 11 },
          { answerName: 'Blue', answerId: 12 },
          { answerName: 'Pink', answerId: 13 },
      ]
  },
  {
      questionId: 2,
      questionName: 'Are you a flat-earther?',
      answers: [
          { answerName: 'Yes', answerId: 21 },
          { answerName: 'No', answerId: 22 },
      ]
  }
];



/* 1. Calcular la cantidad de combinaciones (solo una respuesta por pregunta)
  
  Algo que noto es que las preguntas del cuestionario no necesariamente tienen
  la misma cantidad de respuestas.

  Primero calculo las combinaciones a mano para encontrar un patrón y luego la solución en código.

  Ejemplo de combinaciones:
    Combinación 1: Red - Yes
    Combinación 2: Red - No
    Combinación 3: Blue - Yes
    Combinación 4: Blue - No
    Combinación 5: Pink - Yes
    Combinación 6: Pink - No

  La cantidad de combinaciones es la multiplicacion de la cantidad de respuestas
    Pregunta 1: 3 combinaciones
    Pregunta 2: 2 combinaciones
    Total: 3 * 2 = 6 combinaciones
  
  Trabajando con ustedes, lo siguiente seria preguntar si esto es lo que se desea con combinaciones.
  Si quieren otra cosa me lo indicarian y ajustaria la solución.

  Ya sabiendo eso, puedo hacer el cálculo en código.
  Para cada pregunta multiplicare la cantidad de respuestas para obtener la cantidad de combinaciones.
*/

function calculateCombinations(questions) {
  let combinations = 1;
  for (const question of questions) {
      combinations *= question.answers.length;
  } 
  return combinations;
}

// Prueba de la función
console.log('Cantidad de combinaciones:', calculateCombinations(questionnaire));

/* 2 Crear un archivo CSV con todas las combinaciones sin user nunguna libreria de terceros
     (zero third-party dependencies approahc)

     Ejemplo visual del CSV:
      |------------|------------|------------|------------|
      | Question 1 | Question 2 | Question 3 | Question N |
      | Answer 1   | Answer 2   | Answer 3   | Answer N   |
      | Answer 1   | Answer 2   | Answer 3   | Answer N   |
      | Answer 1   | Answer 2   | Answer 3   | Answer N   |
      | Answer 1   | Answer 2   | Answer 3   | Answer N   |
      |------------|------------|------------|------------|

    Para este caso, el CSV tendrá 6 filas y 2 columnas.
    Asumo que la tabla se tendra que ver asi:

    |-----------------------------|------------------------|
    |What is your favorite color? | Are you a flat-earther?|
    |Red                          | Yes                    |
    |Red                          | No                     |
    |Blue                         | Yes                    |
    |Blue                         | No                     |
    |Pink                         | Yes                    |
    |Pink                         | No                     |
    |-----------------------------|------------------------|

    Igualmente, trabajando con ustedes, preguntaria si el formato es el correcto.
    Si desean otro formato, me lo indicarian y ajustaria la solución.

    Ya sabiendo eso, puedo crear el CSV en código.
 */

const fs = require('fs');

// Obtener las preguntas y respuestas
const questions = [];
const answers = [];

for (const question of questionnaire) {
  // Agregar el nombre de la pregunta
  questions.push(question.questionName);
  
  // Agregar las respuestas de la pregunta
  const answerList = []
  for (const answer of question.answers) {
      answerList.push(answer.answerName);
  }
  answers.push(answerList);
}

// console.log(questions);
// console.log(answers);

// Generar las combinaciones
const generateCombinations = (arrays, prefix = [], result = []) => {
  if (!arrays.length) {
      result.push(prefix);
      return result;
  }
  const [first, ...rest] = arrays;
  for (const value of first) {
      generateCombinations(rest, [...prefix, value], result);
  }
  return result;

}
// console.log(generateCombinations(answers));

// Crear el archivo CSV
// Separar preguntas y respuestas por comas y separar filas por saltos de línea
const createCSV = (questions, answers) => {
  const header = questions.join(',');
  const combinations = generateCombinations(answers);
  const rows = combinations.map(combination => combination.join(','));
  const csv = [header, ...rows].join('\n');
  return csv;
}
// console.log(createCSV(questions, answers));

// Guardar el archivo CSV
const csv = createCSV(questions, answers);
fs.writeFileSync('combinations.csv', csv);