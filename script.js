const form = document.querySelector('#lead-form');
const feedback = document.querySelector('.form-feedback');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = new FormData(form).get('nome').trim().split(' ')[0];
  feedback.textContent = `Obrigado, ${name}! Em breve nosso time comercial entrará em contato.`;
  form.reset();
});
