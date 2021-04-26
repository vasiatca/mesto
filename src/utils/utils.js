import {
  formEditProfile,
} from './constants';


function submitFormAddCard(values, callback) {
  const item = {
    name: values['name-input'],
    link: values['link-input']
  };

  return callback(item);
}

function submitFormEditProfile(values, callback) {
  const nameInput = values['name-input'];
  const jobInput = values['job-input'];

  return callback({ name: nameInput, job: jobInput });
}

function initialEditForm(name, job) {
  const nameInput = formEditProfile['name-input'];
  const jobInput = formEditProfile['job-input'];

  nameInput.value = name;
  jobInput.value = job;
}

export {
  submitFormAddCard,
  submitFormEditProfile,
  initialEditForm
}