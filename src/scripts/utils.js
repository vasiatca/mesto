import {
  configSet,
  formEditProfile,
  popupPictureSelector
} from './constants';
import Card from '../components/Card';
import FormValidator from '../components/FormValidator';
import PopupWithImage from '../components/PopupWithImage';


function renderCard(item) {
  const popup = new PopupWithImage(popupPictureSelector, item);
  popup.setEventListeners();

  const card = new Card(item, '#element__card-template', () => popup.open());
  return card;
}

function initialValidator(formElement) {
  new FormValidator(configSet, formElement).enableValidation()
}

function submitFormAddCard(values, callback) {
  const item = {
    name: values['name-input'],
    link: values['link-input']
  };

  return callback(item);
}

function submitFormEditProfile(values, callback) {
  const nameInput = values['name-input'];
  const jobInput = values['job-input'];

  return callback({ name: nameInput, job: jobInput });
}

function initialEditForm(name, job) {
  const nameInput = formEditProfile['name-input'];
  const jobInput = formEditProfile['job-input'];

  nameInput.value = name;
  jobInput.value = job;
}

export {
  renderCard,
  initialValidator,
  submitFormAddCard,
  submitFormEditProfile,
  initialEditForm
}