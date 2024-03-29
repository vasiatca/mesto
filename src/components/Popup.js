import { body } from "../utils/constants";

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupContainer = this._popup.querySelector('.popup__container');
    this._body = body;
    this._closeButton = this._popup.querySelector('.popup__close');
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._body.classList.add('body_disabled-scroll');

    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._body.classList.remove('body_disabled-scroll');

    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  _hidePopupOnOverlay(event) {
    if (event.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => this.close());
    this._popup.addEventListener('click', (event) => this._hidePopupOnOverlay(event));
    this._popupContainer.addEventListener('click', (event) => event.stopPropagation());
  }
}