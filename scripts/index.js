let editPopupButton = document.querySelector('#edit-popup');
let popup = document.querySelector('.popup');
let popupContainer = document.querySelector('.popup__container');
let closePopupButton = document.querySelector('.popup__close');
let body = document.querySelector('.body');

let likeButtons = document.querySelectorAll('.element__like');

editPopupButton.addEventListener('click', toggleShowPopup);
closePopupButton.addEventListener('click', toggleShowPopup);
popup.addEventListener('click', toggleShowPopup);
popupContainer.addEventListener('click', stopPropagation);

function toggleShowPopup() {
  popup.classList.toggle('popup_opened');
  body.classList.toggle('body_disabled-scroll'); 
}

function stopPropagation(event) {
  event.stopPropagation();
}

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addEventListener('click', toggleActiveLikeButton);
}

function toggleActiveLikeButton(event) {
  event.target.classList.toggle('element__like_active');
}

let form = document.querySelector(".popup__content");
let nameInput = document.querySelector('[name="nameInput"]');
let jobInput = document.querySelector('[name="jobInput"]');
let profileTitle = document.querySelector('.profile__title');
let profileSubTitle = document.querySelector('.profile__subtitle');

form.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  toggleShowPopup();
}