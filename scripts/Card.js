import { showPopupPicture } from './utils.js';
import { popupPicture } from './constants.js';

export default class Card {
  constructor(cardData, templateSelector) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector)
      .content
      .querySelector('.element__card')
      .cloneNode(true);
  }

  _generateCard() {
    this._cardElement = this._getTemplate();
    this._elementImage = this._cardElement.querySelector(".element__image");
    this._elementTitle = this._cardElement.querySelector(".element__title");
    this._elementLikeButton = this._cardElement.querySelector('.element__like');
    this._elementDeleteButton = this._cardElement.querySelector('.element__delete');
    
    this._setEventListeners();

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementTitle.textContent = this._name;

    return this._cardElement;
  }

  _setEventListeners() {
    this._setEventLike();
    this._setEventDelete();
    this._setEventPopupPicture();
  }
  
  _setEventLike() {
    this._elementLikeButton.addEventListener('click', () => this._elementLikeButton.classList.toggle('element__like_active'));
  }
  
  _setEventDelete() {
    this._elementDeleteButton.addEventListener('click', () => this._cardElement.remove());
  }
  
  _setEventPopupPicture() {
    this._elementImage.addEventListener('click', () => showPopupPicture(popupPicture, this._name, this._link));
  }

  getCard() {
    return this._generateCard();
  }
}



  













