import { initialCards, formList, buttonAddPopup, buttonEditPopup, buttonsClosePopup } from './constants.js';
import { renderCard, initialValidator, editPopup, addCardPopup, closePopupButton } from './utils.js';

buttonAddPopup.addEventListener('click', addCardPopup);
buttonEditPopup.addEventListener('click', editPopup);
  
initialCards.forEach((item) => renderCard(item));

formList.forEach(initialValidator);

buttonsClosePopup.forEach(closePopupButton);
