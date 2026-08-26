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

  segmentarPorCampanha(document.getElementById('utm_campaign')?.value);
})();

function segmentarPorCampanha(utmCampaign) {
  if (!utmCampaign) return;

  const hifen = utmCampaign.indexOf('-');
  if (hifen === -1) return;

  const tipo = utmCampaign.slice(0, hifen);
  const temaSlug = utmCampaign.slice(hifen + 1);
  if (!tipo || !temaSlug) return;

  const tema = temaSlug
    .split('-')
    .filter(Boolean)
    .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(' ');
  if (!tema) return;

  const banner = document.getElementById('hero-continuity');
  const bannerTexto = document.getElementById('hero-continuity-text');
  if (banner && bannerTexto) {
    bannerTexto.textContent = `Sobre o que você viu: ${tema}`;
    banner.hidden = false;
  }

  const ctaTextos = {
    conversao: 'Quero uma proposta agora',
    prova_social: 'Quero um resultado assim',
  };
  const novoCtaTexto = ctaTextos[tipo];
  if (novoCtaTexto) {
    const ctaTexto = document.getElementById('hero-cta-text');
    if (ctaTexto) ctaTexto.textContent = novoCtaTexto;
  }
}

const form = document.querySelector('#lead-form');

form?.addEventListener('submit', () => {
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'Enviando…';
});
