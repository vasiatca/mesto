export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._profileTitle = document.querySelector(name);
    this._profileSubTitle = document.querySelector(about);
    this._profileAvatar = document.querySelector(avatar);
  }

  getUserInfo() {
    return {
      name: this._profileTitle.textContent,
      about: this._profileSubTitle.textContent
    }
  }

  getUserId() {
    return this._id;
  }

  setUserInfo({ name, about, id }) {
    this._id = id;
    this._profileTitle.textContent = name;
    this._profileSubTitle.textContent = about;
  }

  updateAvatar(avatar) {
    this._profileAvatar.src = avatar;
  }

}