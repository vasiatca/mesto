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
const picturePopup = document.querySelector('#picture-popup');
const editPopupButton = document.querySelector('#edit-popup');
const editProfilePopup = document.querySelector('#edit-profile-popup');
const addCardPopup = document.querySelector('#add-card-popup');
const body = document.querySelector('.body');
const addPopupButton = document.querySelector('#add-popup');
const formEditProfile = document.forms['edit-profile'];
const formAddCard = document.forms['add-card'];
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');
const cardContainer = document.querySelector('.element');

const cardTemplate = document.querySelector('#element__card-template').content;
const closePopupButtons = document.querySelectorAll('.popup__close');

function showPopup(popup) {
  popup.classList.add('popup_opened');
  body.classList.add('body_disabled-scroll'); 
}

function hidePopup(popup) {
  popup.classList.remove('popup_opened');
  body.classList.remove('body_disabled-scroll'); 
}

function toggleActiveLikeButton(event) {
  event.target.classList.toggle('element__like_active');
}

function getCard(name, link) {
  const cardElement = cardTemplate.querySelector('.element__card').cloneNode(true);
  const cardPicture = cardElement.querySelector('.element__image');
  const cardCaption = cardElement.querySelector('.element__title');
  const likeButton = cardElement.querySelector('.element__like');

  cardPicture.addEventListener('click', () => showPopupPicture(name, link));
  likeButton.addEventListener('click', toggleActiveLikeButton);
  cardElement.querySelector('.element__delete').addEventListener('click', deleteCard);
  cardPicture.src = link;
  cardPicture.alt = name;
  cardCaption.textContent = name;

  return cardElement;
}

 function showPopupPicture(name, link) {
  showPopup(picturePopup);

  const picture = picturePopup.querySelector('.popup__picture');
  const caption = picturePopup.querySelector('.popup__picture-caption');

  picture.src = link;
  picture.alt = name;
  caption.textContent = name;
}

function deleteCard(event) {
  event.target.closest('.element__card').remove();
}

function addCardAppend(name, link) {
  const element = getCard(name, link);

  cardContainer.append(element);
}

function addCardPrepend(name, link) {
  const element = getCard(name, link);

  cardContainer.prepend(element);
}

function submitFormAddCard(event) {
  event.preventDefault();

  const nameInput = event.target['name-input'];
  const linkInput = event.target['link-input'];

  addCardPrepend(nameInput.value, linkInput.value);
  hidePopup(addCardPopup);
}

function submitFormEditProfile(event) {
  event.preventDefault();

  const nameInput = event.target['name-input'];
  const jobInput = event.target['job-input'];

  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;

  hidePopup(editProfilePopup);
}

addPopupButton.addEventListener('click', () => {
  showPopup(addCardPopup);
  
  formAddCard.reset();
  formAddCard.addEventListener('submit', submitFormAddCard);
});

editPopupButton.addEventListener('click', () => {
  showPopup(editProfilePopup);

  const nameInput = formEditProfile['name-input'];
  const jobInput = formEditProfile['job-input'];
  
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
  formEditProfile.addEventListener('submit', submitFormEditProfile);
});

initialCards.forEach((item) => {
  addCardAppend(item.name, item.link);
});

closePopupButtons.forEach((btn) => {
  const popup = btn.closest('.popup');
  const popupContainer = popup.querySelector('.popup__container');

  popup.addEventListener('click', () => hidePopup(popup));
  popupContainer.addEventListener('click', (event) => event.stopPropagation());
  btn.addEventListener('click', () => hidePopup(popup));
});