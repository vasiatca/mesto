
export default class FormValidator {
  constructor(configSet, formElement) {
    this._configSet = configSet;
    this._formElement = formElement;

    this._inputList = Array.from(this._formElement.querySelectorAll(this._configSet.inputSelector));
    this._button = this._formElement.querySelector(this._configSet.submitButtonSelector);
  }

  _hideError(input, error) {
    input.classList.remove(this._configSet.inputErrorClass);
    error.classList.remove(this._configSet.errorClass);
    error.textContent = '';
  }

  _showError(input, error) {
    const errorMessage = input.validationMessage;

    input.classList.add(this._configSet.inputErrorClass);
    error.textContent = errorMessage;
    error.classList.add(this._configSet.errorClass);
  }

  _checkInput(input, showError = true) {
    const error = input.nextElementSibling;

    if (!(input.validity.valid && input.value) && showError) {
      this._showError(input, error);
    } else {
      this._hideError(input, error);
    }
  }

  _checkInputEvent = (event) => {
    const input = event.target;

    this._checkInput(input);
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    })
  }

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._button.classList.add(this._configSet.inactiveButtonClass);
      this._button.setAttribute('disabled', true);
    } else {
      this._button.classList.remove(this._configSet.inactiveButtonClass);
      this._button.removeAttribute('disabled');
    }
  }


  _setInputListeners() {
    this._reset();

    this._inputList.forEach((input) => {
      // другого способа сброса ошибок не придумал
      // если есть варианты лучше, пожалуйста, напишите
      this._checkInput(input, false);

      input.addEventListener('input', this._checkInputEvent);
      input.addEventListener('input', this._toggleButtonState);
    });
  }

  _reset() {
    this._toggleButtonState();

    this._inputList.forEach((input) => {
      input.removeEventListener('input', this._checkInputEvent);
      input.removeEventListener('input', this._toggleButtonState);
    });
  }

  enableValidation() {
    this._setInputListeners();
  }

  // resetValidation() {
  //   this._reset();
  // }
}



















