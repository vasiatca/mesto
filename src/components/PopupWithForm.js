import Popup from './Popup';

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._form = this._popup.querySelector('.popup__content');
    this._button = this._popup.querySelector('.popup__submit-button');
    this._buttonInitialText = this._button.textContent;
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
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => this._innerSubmitHandler(event));
  }

  setSubmitAction(submitHandler) {
    this._submitHandler = submitHandler;
  }

  close() {
    super.close();
    this._form.reset();
  }

  toggleLoadingStatus(status) {
    if (status) {
      this._button.disabled = true;
      this._button.textContent = 'Загружаем...';
    } else {
      setTimeout(() => {
        this._button.disabled = false;
        this._button.textContent = this._buttonInitialText;
      }, 100);
    }
  }
}