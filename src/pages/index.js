import '../pages/index.css';
import {
  apiSettings,
  buttonAddPopup,
  buttonEditPopup,
  cardContainer,
  popupAddCardSelector,
  popupEditProfileSelector,
  popupPictureSelector,
  profileTitle,
  profileSubTitle,
  formEditProfile,
  formAddCard,
  configSet,
  profileAvatar,
  templateSelector,
  popupConfirmSelector,
  popupAvatarSelector,
  buttonEditAvatar,
  formUpdateAvatar
} from '../utils/constants';
import {
  initialEditForm
} from '../utils/utils';

import Section from '../components/Section';
import PopupWithForm from '../components/PopupWithForm';
import UserInfo from '../components/UserInfo';
import FormValidator from '../components/FormValidator';
import Card from '../components/Card';
import PopupWithImage from '../components/PopupWithImage';
import Api from '../components/Api';

const api = new Api({
  baseUrl: apiSettings.baseUrl,
  headers: {
    authorization: apiSettings.token,
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({ name: profileTitle, about: profileSubTitle, avatar: profileAvatar });
const popupDelete = new PopupWithForm(popupConfirmSelector);
const popupImage = new PopupWithImage(popupPictureSelector);
const popupAddCard = new PopupWithForm(popupAddCardSelector);
const popupEditProfile = new PopupWithForm(popupEditProfileSelector);
const popupAvatarProfile = new PopupWithForm(popupAvatarSelector);
const section = new Section(
  {
    renderer: updateCards,
  },
  cardContainer
);

const validatorFormAddCard = new FormValidator(configSet, formAddCard);
const validatorFormEditProfile = new FormValidator(configSet, formEditProfile);
const validatorFormEditAvatar = new FormValidator(configSet, formUpdateAvatar);

function initializationUser({ name, about, avatar, _id }) {
  updateUser({ name, about, _id });
  updateUserAvatar({ avatar });
}

function updateUser({ name, about, _id }) {
  userInfo.setUserInfo({ name, about, id: _id });
}

function updateUserAvatar({ avatar }) {
  userInfo.updateAvatar(avatar);
}

function updateCards(item, prepend = false) {
  const card = renderCard(item);
  const userId = userInfo.getUserId();

  card.compareOwner(userId);

  const element = card.getCard();

  card.setLikeStatus(userId);

  section.addItem(element, prepend);
}

function initializationCards(cards) {
  section.renderItems(cards);
}

function renderCard(item) {
  const card = new Card({
    ...item,
    handleLikeButtonClick: (id) => {
      const userId = userInfo.getUserId();

      if (card.getLikeStatus()) {
        api.unlike(id).then(({ likes }) => {
          card.updateLike(likes);
          card.setLikeStatus(userId);
        })
      } else {
        api.like(id).then(({ likes }) => {
          card.updateLike(likes);
          card.setLikeStatus(userId);
        })
      }
    },
    handleImageClick: () => popupImage.open(item),
    handleDeleteClick: (id) => {
      popupDelete.open();

      popupDelete.setSubmitAction(() => {
        popupDelete.toggleLoadingStatus(true);

        api.deleteCard(id)
          .then(() => {
            card.deleteCard()
            popupDelete.close();
          })
          .catch(e => console.log(e))
          .finally(() => {
            popupDelete.toggleLoadingStatus(false);
          });
      })
    }
  }, templateSelector);

  return card
}

Promise.all([
  api.getUser(),
  api.getInitialCards()
]).then(([user, cards]) => {
  initializationUser(user);
  initializationCards(cards);
});

popupAddCard.setSubmitAction(async ({ name, link }) => {
  popupAddCard.toggleLoadingStatus(true);

  await api.addNewCard({ name, link })
    .then((card) => {
      updateCards(card, true)
      popupAddCard.close();
    })
    .catch(e => console.log(e))
    .finally(() => {
      popupAddCard.toggleLoadingStatus(false);
    });
});

popupEditProfile.setSubmitAction(async ({ name, about }) => {
  popupEditProfile.toggleLoadingStatus(true);

  await api.editUser({ name, about })
    .then((user) => {
      updateUser(user);
      popupEditProfile.close();
    })
    .catch(e => console.log(e))
    .finally(() => {
      popupAvatarProfile.toggleLoadingStatus(false);
    });
});

popupAvatarProfile.setSubmitAction(async ({ avatar }) => {
  popupAvatarProfile.toggleLoadingStatus(true);

  await api.updateAvatar(avatar)
    .then((user) => {
      updateUserAvatar(user);
      popupAvatarProfile.close();
    })
    .catch(e => console.log(e))
    .finally(() => {
      popupAvatarProfile.toggleLoadingStatus(false);
    });
});

popupDelete.setEventListeners();

popupAvatarProfile.setEventListeners();

popupImage.setEventListeners();

popupAddCard.setEventListeners();

popupEditProfile.setEventListeners();

buttonAddPopup.addEventListener('click', () => {
  validatorFormAddCard.reset();
  popupAddCard.open();
});

buttonEditPopup.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();

  initialEditForm(name, about);

  validatorFormEditProfile.reset();
  popupEditProfile.open();
});

buttonEditAvatar.addEventListener('click', () => {
  validatorFormEditAvatar.reset();
  popupAvatarProfile.open();
});

validatorFormAddCard.enableValidation();

validatorFormEditProfile.enableValidation();

validatorFormEditAvatar.enableValidation();