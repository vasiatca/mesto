import '../pages/index.css';
import { initialCards, formList, buttonAddPopup, buttonEditPopup, cardContainer, popupAddCardSelector, popupEditProfileSelector, profileTitle, profileSubTitle } from './constants';
import { renderCard, initialValidator, submitFormAddCard, submitFormEditProfile, initialEditForm } from './utils';

import Section from '../components/Section';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';

const section = new Section({ items: initialCards, renderer: renderCard }, cardContainer);
const userInfo = new UserInfo({ name: profileTitle, job: profileSubTitle });
const popupAddCard = new PopupWithForm(popupAddCardSelector, (values) => submitFormAddCard(values, (item) => section.addItem(item, true)));
const popupEditProfile = new PopupWithForm(
  popupEditProfileSelector,
  (values) => submitFormEditProfile(values, ({ name, job }) =>
    userInfo.setUserInfo({ name, job })
  )
);

section.renderItems();

popupAddCard.setEventListeners();

popupEditProfile.setEventListeners();

buttonAddPopup.addEventListener('click', () => popupAddCard.open());

buttonEditPopup.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo();

  initialEditForm(name, job);

  popupEditProfile.open();
});

formList.forEach(initialValidator);