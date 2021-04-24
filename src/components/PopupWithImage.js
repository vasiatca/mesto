import Popup from './Popup';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, { name, link }) {
    super(popupSelector);

    this._picture = this._popup.querySelector('.popup__picture');
    this._caption = this._popup.querySelector('.popup__picture-caption');

    this._name = name;
    this._link = link;
  }

  open() {
    super.open();

    this._picture.src = this._link;
    this._picture.alt = this._name;
    this._caption.textContent = this._name;
  }
}