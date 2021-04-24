import { 
  body,
  cardContainer,
  configSet,
  profileTitle,
  profileSubTitle,
  formAddCard,
  formEditProfile,
  popupAddCard,
  popupEditProfile
} from './constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

// function showPopup(popup) {
//   popup.classList.add('popup_opened');
//   body.classList.add('body_disabled-scroll');
  
//   document.addEventListener('keydown', hidePopupByEsc);

//   popup.addEventListener('click', hidePopupOnOverlay);
// }

// function hidePopup(popup) {
//   popup.classList.remove('popup_opened');
//   body.classList.remove('body_disabled-scroll'); 
  
//   document.removeEventListener('keydown', hidePopupByEsc);

//   popup.removeEventListener('click', hidePopupOnOverlay);
// }

// function hidePopupByEsc(event) {
//   const openedPopup = document.querySelector('.popup_opened');
//   if (event.key === 'Escape') {
//     hidePopup(openedPopup);
//   }
// }

// function closePopupButton(btn) {
//   const popup = btn.closest('.popup'); 
//   const popupContainer = popup.querySelector('.popup__container'); 
  
//   popup.addEventListener('click', () => hidePopup(popup)); 
//   popupContainer.addEventListener('click', (event) => event.stopPropagation()); 
//   btn.addEventListener('click', () => hidePopup(popup)); 
// }

// function hidePopupOnOverlay(event) {
//   event.stopPropagation();
  
//   if (event.target.classList.contains('popup_opened')) {
//     hidePopup(event.target);
//   }
// }

// function showPopupPicture(popup, name, link) {
//   showPopup(popup);
  
//   const picture = popup.querySelector('.popup__picture');
//   const caption = popup.querySelector('.popup__picture-caption');
  
//   picture.src = link;
//   picture.alt = name;
//   caption.textContent = name;
// }

function appendCard(card) {
  const element = card.getCard();

  cardContainer.append(element);
}

function prependCard(card) {
  const element = card.getCard();

  cardContainer.prepend(element);
}

function renderCard(item, prepend = false) {
  const card = new Card(item, '#element__card-template');

  if (!prepend) {
    appendCard(card);
  } else {
    prependCard(card);
  }
}

function initialValidator (formElement) {
  new FormValidator(configSet, formElement).enableValidation()
}

function submitFormAddCard(event) {
  event.preventDefault();

  const item = {
    name: event.target['name-input'].value,
    link: event.target['link-input'].value
  };

  if (!(event.target['name-input'].value && event.target['link-input'].value)) {
    return
  }
  
  renderCard(item, true);
  hidePopup(popupAddCard);
}

function submitFormEditProfile(event) {
  event.preventDefault();

  const nameInput = event.target['name-input'];
  const jobInput = event.target['job-input'];

  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;

  hidePopup(popupEditProfile);
}

function editPopup() {
  showPopup(popupEditProfile);

  const nameInput = formEditProfile['name-input'];
  const jobInput = formEditProfile['job-input'];

  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;

  formEditProfile.addEventListener('submit', submitFormEditProfile);
}

function addCardPopup() {
  showPopup(popupAddCard);
    
  formAddCard.reset();
  formAddCard.addEventListener('submit', submitFormAddCard);
}

export {
  showPopupPicture,
  renderCard,
  initialValidator,
  editPopup,
  addCardPopup,
  closePopupButton
}

const cardContainer = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const cardElement = createCard(cardData);
    cardContainer.addItem(cardElement);
  }
}, cardContainerSelector);

cardContainer.renderItems();