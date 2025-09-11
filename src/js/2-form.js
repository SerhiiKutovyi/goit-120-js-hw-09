const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const feedbackFormRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('.input-form');
const messageRef = document.querySelector('.textarea-form');

feedbackFormRef.addEventListener('input', () => {
  const emailValue = feedbackFormRef.elements.email.value.trim();
  const messageValue = feedbackFormRef.elements.message.value.trim();

  formData.email = emailValue;
  formData.message = messageValue;

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
  const emailValue = e.target.elements.email.value.trim();
  const messageValue = e.target.elements.message.value.trim();

  if (emailValue === '' || messageValue === '') {
    alert('Fill please all fields');
  }

  formData.email = emailValue;
  formData.message = messageValue;

  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  feedbackFormRef.reset();
});
