export default class Card {
  constructor({
    name,
    link,
    likes,
    owner,
    _id,
    handleImageClick,
    handleDeleteClick,
    handleLikeButtonClick
  }, templateSelector) {
    this._id = _id;
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._ownerId = owner._id;
    this._hasDelete = false;
    this._templateSelector = templateSelector;

    this._handleImageClick = handleImageClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeButtonClick = handleLikeButtonClick;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector)
      .content
      .querySelector('.element__card')
      .cloneNode(true);
  }

  _generateCard() {
    this._cardElement = this._getTemplate();
    this._elementImage = this._cardElement.querySelector(".element__image");
    this._elementTitle = this._cardElement.querySelector(".element__title");
    this._elementLikeButton = this._cardElement.querySelector('.element__like');
    this._elementDeleteButton = this._cardElement.querySelector('.element__delete');
    this._elementLikeNumber = this._cardElement.querySelector('.element__like-number');

    this._setEventListeners();

    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementTitle.textContent = this._name;

    this.updateLike(this._likes);

    if (!this._hasDelete) {
      this._elementDeleteButton.remove();
    }

    return this._cardElement;
  }

  _setEventListeners() {
    this._setEventLike();
    this._setEventDelete();
    this._setEventPopupPicture();
  }

  _setEventLike() {
    this._elementLikeButton.addEventListener('click', () => this._handleLikeButtonClick(this._id));
  }

  _setEventDelete() {
    if (!this._hasDelete) return

    this._elementDeleteButton.addEventListener('click', () => this._handleDeleteClick(this._id));
  }

  _setEventPopupPicture() {
    this._elementImage.addEventListener('click', () => this._handleImageClick());
  }

  getCard() {
    return this._generateCard();
  }

  deleteCard() {
    this._cardElement.remove();
  }

  compareOwner(userId) {
    this._hasDelete = this._ownerId === userId;
  }

  updateLike(likes) {
    this._likes = likes;
    this._elementLikeNumber.textContent = likes.length;
  }

  setLikeStatus(userId) {
    this._likeActive = this._likes.some(user => user._id === userId);

    if (this._likeActive) {
      this._elementLikeButton.classList.add('element__like_active');
    } else {
      this._elementLikeButton.classList.remove('element__like_active');
    }
  }

  getLikeStatus() {
    return this._likeActive;
  }
}



















