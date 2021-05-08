const apiSettings = {
  token: 'b727ff79-51c9-4709-92ae-f78ccb7732a6',
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-23'
};

const configSet = {
  formSelector: '.popup__content',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__error_visible'
};

const body = document.querySelector('.body');
const cardContainer = '.element';
const templateSelector = '#element__card-template';

const buttonAddPopup = document.querySelector('#add-popup');
const buttonEditPopup = document.querySelector('#edit-popup');
const buttonEditAvatar = document.querySelector('.profile__avatar-overlay');

const popupAddCardSelector = '#add-card-popup';
const popupEditProfileSelector = '#edit-profile-popup';
const popupPictureSelector = '.popup_picture';
const popupAvatarSelector = '#avatar-popup';
const popupConfirmSelector = '#delete-card-popup';

const formAddCard = document.forms['add-card'];
const formEditProfile = document.forms['edit-profile'];
const formUpdateAvatar = document.forms['update-avatar'];

const profileTitle = '.profile__title';
const profileSubTitle = '.profile__subtitle';
const profileAvatar = '.profile__avatar';

export {
  apiSettings,
  configSet,
  body,
  cardContainer,
  templateSelector,

  buttonAddPopup,
  buttonEditPopup,
  buttonEditAvatar,

  popupAddCardSelector,
  popupEditProfileSelector,
  popupPictureSelector,
  popupAvatarSelector,
  popupConfirmSelector,

  formAddCard,
  formEditProfile,
  formUpdateAvatar,

  profileTitle,
  profileSubTitle,
  profileAvatar,
}

