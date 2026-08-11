const form = document.querySelector('#lead-form');

form?.addEventListener('submit', () => {
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Enviando…';
});
