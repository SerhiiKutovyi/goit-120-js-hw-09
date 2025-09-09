const formData = {
  email: '',
  message: '',
};

const feedbackFormRef = document.querySelector('.feedback-form');
console.log(feedbackFormRef);

feedbackFormRef.addEventListener('submit', e => {
  e.preventDefault();

  formData.email = e.target.elements.email.value;
  formData.email = e.target.elements.message.value;
});

console.log(formData);
