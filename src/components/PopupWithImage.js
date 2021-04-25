import Popup from './Popup';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._picture = this._popup.querySelector('.popup__picture');
    this._caption = this._popup.querySelector('.popup__picture-caption');
  }

  open({ name, link }) {
    super.open();

    this._picture.src = link;
    this._picture.alt = name;
    this._caption.textContent = name;
  }
}