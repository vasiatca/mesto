import { initialCards, formList, buttonAddPopup, buttonEditPopup } from './constants.js';
import { renderCard, initialValidator, editPopup, addCardPopup } from './utils.js';

buttonAddPopup.addEventListener('click', addCardPopup);
buttonEditPopup.addEventListener('click', editPopup);
  
initialCards.forEach((item) => renderCard(item));

formList.forEach(initialValidator);