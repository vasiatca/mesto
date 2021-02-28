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

function toggleShowPopup() {
  if (nameInput.value === '') {
    nameInput.value = profileTitle.textContent;
  }

  if (jobInput.value === '') {
    jobInput.value = profileSubTitle.textContent;
  }

  popup.classList.toggle('popup_opened');
  body.classList.toggle('body_disabled-scroll'); 
}

// for (let i = 0; i < likeButtons.length; i++) {
//   likeButtons[i].addEventListener('click', toggleActiveLikeButton);
// }

function toggleActiveLikeButton(event) {
  event.target.classList.toggle('element__like_active');
}

function submit(event) {
  event.preventDefault();
  
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  
  toggleShowPopup();
}

form.addEventListener('submit', submit);

editPopupButton.addEventListener('click', toggleShowPopup);
closePopupButton.addEventListener('click', toggleShowPopup);
popup.addEventListener('click', toggleShowPopup);
popupContainer.addEventListener('click', function(event) {
  event.stopPropagation();
});