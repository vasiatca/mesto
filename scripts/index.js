let editPopupButton = document.querySelector('#edit-popup');
let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup__container');
let closePopupButton = document.querySelector('.popup__close');
let body = document.querySelector('.body');

let form = document.querySelector(".popup__content");
let nameInput = document.querySelector('[name="name-input"]');
let jobInput = document.querySelector('[name="job-input"]');
let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');

// let likeButtons = document.querySelectorAll('.element__like');

function showPopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;

  popup.classList.add('popup_opened');
  body.classList.add('body_disabled-scroll'); 
}

function hidePopup() {
  popup.classList.remove('popup_opened');
  body.classList.remove('body_disabled-scroll'); 
}

// for (let i = 0; i < likeButtons.length; i++) {
//   likeButtons[i].addEventListener('click', toggleActiveLikeButton);
// }

// function toggleActiveLikeButton(event) {
//   event.target.classList.toggle('element__like_active');
// }

function submit(event) {
  event.preventDefault();
  
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  
  hidePopup();
}

form.addEventListener('submit', submit);

editPopupButton.addEventListener('click', showPopup);
closePopupButton.addEventListener('click', hidePopup);
popup.addEventListener('click', hidePopup);
popupContainer.addEventListener('click', function(event) {
  event.stopPropagation();
});