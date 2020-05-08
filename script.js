document.addEventListener('DOMContentLoaded', () => {
  const cards = [...document.querySelectorAll('div[id^=card-]')];
  const pkmns = [...document.querySelectorAll('div[id^=pkm-]')];

  cards.forEach((card, i) => {
    card.addEventListener('click', () => {
      const pkmnId = card.getAttribute('pkm');
      const pkmn = pkmns.find((c) => c.id === pkmnId);

      if (pkmn === undefined) return;
      if ([...card.classList].includes('active')) return;

      // Deactivates previous card and pokemon
      const previousCard = cards.find(
        (c) => c.id !== card.id && [...c.classList].includes('active')
      );

      previousCard.classList.remove('active');

      const previousPkmn = pkmns.find(
        (p) => p.id !== pkmn.id && [...p.classList].includes('active')
      );

      previousPkmn.classList.remove('active');

      // Activates clicked card and pokemon
      card.classList.add('active');
      pkmn.classList.add('active');
    });
  });
});
