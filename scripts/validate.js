const hideInputError = (errorElement, errorClass) => {
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const showInputError = (errorElement, message, errorClass) => {
  errorElement.classList.add(errorClass);
  errorElement.textContent = message;
};

const checkInput = (inputElement, inputErrorClass, errorClass) => {
  const errorElement = inputElement.nextElementSibling;
  
  if (inputElement.validity.valid) {
    inputElement.classList.remove(inputErrorClass);
    hideInputError(errorElement, errorClass);
  } else {
    inputElement.classList.add(inputErrorClass);
    showInputError(errorElement, inputElement.validationMessage, errorClass)
  }
}

//проверка на валидность инпута
const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => !inputElement.validity.valid);
}
  
//проверка все ли инпуты пустые
const allInputsEmpty = (inputList) => {
  return !inputList.some(inputElement => inputElement.value.length > 0);
}
  
//переключение кнопки
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  //если хоть один инпут невалидный
  if (hasInvalidInput(inputList) || allInputsEmpty(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

const setInputListeners = (formElement, params) => {
  const inputList = Array.from(formElement.querySelectorAll(params.inputSelector));
  const button = formElement.querySelector(params.submitButtonSelector);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInput(inputElement, params.inputErrorClass, params.errorClass);

      toggleButtonState(inputList, button, params.inactiveButtonClass);
    })
  });
}


const enableValidation = (params) => {
  const forms = document.querySelectorAll(params.formSelector);

  forms.forEach(form => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  
    setInputListeners(form, params);
  });
}

enableValidation({
  formSelector: '.popup__content',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__error_visible'
}); 