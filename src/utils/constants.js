const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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

const buttonAddPopup = document.querySelector('#add-popup');
const buttonEditPopup = document.querySelector('#edit-popup');

const popupAddCardSelector = '#add-card-popup';
const popupEditProfileSelector = '#edit-profile-popup';
const popupPictureSelector = '.popup_picture';

const formAddCard = document.forms['add-card'];
const formEditProfile = document.forms['edit-profile'];

const profileTitle = '.profile__title';
const profileSubTitle = '.profile__subtitle';


export {
  initialCards,
  configSet,
  body,
  cardContainer,
  buttonAddPopup,
  buttonEditPopup,
  popupAddCardSelector,
  popupEditProfileSelector,
  popupPictureSelector,
  formAddCard,
  formEditProfile,
  profileTitle,
  profileSubTitle
}

