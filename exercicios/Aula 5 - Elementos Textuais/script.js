const news = [
  {
    id: 1,
    Image: 'assets/news1.jpg',
    Title: 'Solo Leveling: ReAwakening ganha trailer e data de lançamento',
    author: 'AnimeNew',
    date: '1 dia atrás',
    link: 'https://animenew.com.br/en/solo-leveling-second-awakening-premieres-in-brazil/',
  },
  {
    id: 2,
    Image: 'assets/news2.jpg',
    Title: 'Discord | Saiba como ganhar 3 meses de Nitro para novos e antigos usuários com a Twitch',
    author: 'Portal Viciados',
    date: '4 dias atrás',
    link: 'https://viciados.net/discord-3-meses-nitro-novos-antigos-usuarios-twitch/',
  },
  {
    id: 3,
    Image: 'assets/news3.jpg',
    Title: 'Após 15 anos de história, Windows 7 chega ao fim: Microsoft encerra suporte e gigantes como Chrome e Steam deixam o SO',
    author: 'CPG Click Petróleo e Gás',
    date: '1 dia atrás',
    link: 'https://clickpetroleoegas.com.br/apos-15-anos-de-historia-windows-7-chega-ao-fim-microsoft-encerra-suporte-e-gigantes-como-chrome-e-steam-deixam-de-funcionar/',
  },
  {
    id: 4,
    Image: 'assets/news4.jpeg',
    Title: 'PS Plus | Sony Revela o primeiro jogo gratuito da PS Plus em 2025',
    author: 'Portal Viciados',
    date: '2 dias atrás',
    link: 'https://viciados.net/ps-plus-sony-jogo-gratuito-playstation-plus-2025/',
  },
  {
    id: 5,
    Image: 'assets/news5.png',
    Title: 'Google vs Epic: Juiz aceita apelação e PlayStore ficará "fechada',
    author: 'Technoblog',
    date: '1 dia atrás',
    link: 'https://tecnoblog.net/noticias/google-vs-epic-juiz-aceita-apelacao-e-play-store-ficara-fechada/',
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const newsContainer = document.getElementById('news-container');

  newsContainer.innerHTML = news.map(newsItem => {
    return `
    <article class="news">
    <a href="${newsItem.link}" target="_blank" style="color: white; text-decoration: none;">
      <div class="banner">
        <img src="${newsItem.Image}" alt="Banner da noticia">
      </div>
      <div class="txt">
        <h1>${newsItem.Title}</a></h1>
        <div class="info">
          <span>${newsItem.author}</span>
          <span class="separador">•</span>
          <span>${newsItem.date}</span>
        </div>
      </div>
    </article>
    `;
  }).join('');
});
