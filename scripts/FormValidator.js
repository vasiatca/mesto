
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
    
  _checkInput(input) {
    const error = input.nextElementSibling;

    if (!input.validity.valid) {
      this._showError(input, error);
    } else {
      this._hideError(input, error);
    }
  };

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    })
  }
  
  _toggleButtonState() {
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
      input.addEventListener('input', () => {
        this._checkInput(input);
        this._toggleButtonState();
      })
    });
  }
  
  _reset() {
    this._toggleButtonState();
  }

  enableValidation() {
    this._setInputListeners()
  }
}



  

  

 

  
  

  



