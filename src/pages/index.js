import '../pages/index.css';
import { initialCards, buttonAddPopup, buttonEditPopup, cardContainer, popupAddCardSelector, popupEditProfileSelector, profileTitle, profileSubTitle, formEditProfile, formAddCard, configSet } from '../utils/constants';
import { renderCard, submitFormAddCard, submitFormEditProfile, initialEditForm } from '../utils/utils';

import Section from '../components/Section';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';
import FormValidator from '../components/FormValidator';

const validatorFormAddCard = new FormValidator(configSet, formAddCard);

const validatorFormEditProfile = new FormValidator(configSet, formEditProfile);

const section = new Section({
  items: initialCards, renderer: (item) => {
    const card = renderCard(item);
    const element = card.getCard();

    section.addItem(element);
  }
}, cardContainer);
const userInfo = new UserInfo({ name: profileTitle, job: profileSubTitle });
const popupAddCard = new PopupWithForm(popupAddCardSelector, (values) => submitFormAddCard(values, (item) => {
  const card = renderCard(item);
  const element = card.getCard();

  section.addItem(element, true);
}));
const popupEditProfile = new PopupWithForm(
  popupEditProfileSelector,
  (values) => submitFormEditProfile(values, ({ name, job }) => {
    userInfo.setUserInfo({ name, job });
  })
);

section.renderItems();

popupAddCard.setEventListeners();

popupEditProfile.setEventListeners();

buttonAddPopup.addEventListener('click', () => {
  validatorFormAddCard.enableValidation();
  popupAddCard.open();
});

buttonEditPopup.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo();

  initialEditForm(name, job);

  validatorFormEditProfile.enableValidation();
  popupEditProfile.open();
});