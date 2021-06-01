'use strict';

import { PREVIEWS_QUESTION_BUTTON_ID } from '../constants.js';
import previewsQuestion from '../listeners/previewsQuestion.js';
import createDOMElement from '../utils/createDOMElement.js';

const createPreviewsQuestionButtonElement = () => {
  const buttonElement = createDOMElement('button', {
    id: PREVIEWS_QUESTION_BUTTON_ID,
  });

  buttonElement.innerText = 'previews question';
  buttonElement.addEventListener('click', previewsQuestion);

  return buttonElement;
};

export default createPreviewsQuestionButtonElement;
