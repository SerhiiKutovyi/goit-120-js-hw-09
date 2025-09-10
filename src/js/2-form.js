const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const feedbackFormRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('.input-form');
const messageRef = document.querySelector('.textarea-form');

feedbackFormRef.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

const loadFormData = () => {
  const obj = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (obj) {
    emailRef.value = obj.email;
    messageRef.value = obj.message;
  }
};

loadFormData();

feedbackFormRef.addEventListener('submit', e => {
  e.preventDefault();
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then(value => {
    console.log(value); // 5
    return value * 2;
  })
  .then(value => {
    console.log(value); // 10
    return value * 3;
  })
  .then(value => {
    console.log(value); // 30
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });
