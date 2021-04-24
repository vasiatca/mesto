export default class UserInfo {
  constructor({ name, job }) {
    this._profileTitle = document.querySelector(name);
    this._profileSubTitle = document.querySelector(job);
  }

  getUserInfo() {
    return {
      name: this._profileTitle.textContent,
      job: this._profileSubTitle.textContent
    }
  }

  setUserInfo({ name, job }) {
    this._profileTitle.textContent = name;
    this._profileSubTitle.textContent = job;
  }
}