'use strict';

import { QUESTION_CONTAINER_ID, QUIZ_CONTAINER_ID } from '../constants.js';
import showCurrentQuestion from '../handlers/showCurrentQuestion.js';
import createDOMElement from '../utils/createDOMElement.js';
import getDOMElement from '../utils/getDOMElement.js';
import createNextQuestionButtonElement from '../views/createNextQuestionButtonElement.js';
import { quizData } from '../data.js';
import clearDOMElement from '../utils/clearDOMElement.js';
import createPreviewsQuestionButtonElement from '../views/createPreviewsQuestionButtonElement.js';

const initializeQuiz = () => {
  quizData.currentQuestionIndex = 0;

  console.log('bla');
  startButton();
};

const startButton = () => {
  const userInterfaceContainer = document.querySelector('#user-interface');
  const startBtn = document.createElement('button');
  startBtn.textContent = 'Start Quiz';
  startBtn.addEventListener('click', () => {
    clearDOMElement(userInterfaceContainer);
    setupQuizHTML();
    showCurrentQuestion();
    let sec = 60;
    const time = setInterval(myTimer, 1000);

    function myTimer() {
      document.getElementById('timer').innerHTML = sec + ' ' + 'second Left';
      sec--;
      if (sec == -1) {
        clearInterval(time);
        alert('Time out!! :(');
      }
    }
  });
  userInterfaceContainer.appendChild(startBtn);
};
const setupQuizHTML = () => {
  const userInterfaceContainer = getDOMElement('user-interface');
  const quizContainer = createDOMElement('div', { id: QUIZ_CONTAINER_ID });
  const questionContainer = createDOMElement('div', {
    id: QUESTION_CONTAINER_ID,
  });
  quizContainer.appendChild(questionContainer);
  // add a previous button
  const previewsQuestionButton = createPreviewsQuestionButtonElement();
  quizContainer.appendChild(previewsQuestionButton);
  // add a next button
  const nextQuestionButton = createNextQuestionButtonElement();
  quizContainer.appendChild(nextQuestionButton);

  console.log(quizContainer);
  userInterfaceContainer.appendChild(quizContainer);
};

window.addEventListener('load', initializeQuiz);
