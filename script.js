(function capturarUtm() {
  const params = new URLSearchParams(window.location.search);
  const campos = ["utm_source", "utm_medium", "utm_campaign", "utm_content"];
  campos.forEach((campo) => {
    const valorNaUrl = params.get(campo);
    const input = document.getElementById(campo);
    if (!input) return;
    if (valorNaUrl) {
      try {
        sessionStorage.setItem(campo, valorNaUrl);
      } catch (e) {}
      input.value = valorNaUrl;
    } else {
      let valorSalvo = null;
      try {
        valorSalvo = sessionStorage.getItem(campo);
      } catch (e) {}
      if (valorSalvo) input.value = valorSalvo;
    }
  });
})();

const form = document.querySelector('#lead-form');

form?.addEventListener('submit', () => {
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Enviando…';
});
