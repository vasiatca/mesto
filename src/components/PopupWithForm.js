import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);

    this._form = this._popup.querySelector('.popup__content');
    this._submitHandler = submitHandler;
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.popup__field');
    this._formValues = {};
    this._inputList.forEach(field => this._formValues[field.name] = field.value);

    return this._formValues;
  }

  _innerSubmitHandler(event) {
    event.preventDefault();
    this._submitHandler(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => this._innerSubmitHandler(event));
  }

  close() {
    super.close();
    this._form.reset();
  }
}