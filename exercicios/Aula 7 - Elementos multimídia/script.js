const filmes = [
  {
    id: 1,
    Image: 'assets/filme1.jpeg',
    Title: 'One Piece',
    desc: 'A épica jornada de Luffy e sua tripulação em busca do tesouro lendário, repleta de aventuras, amizades e batalhas emocionantes.',
    genres: ['Anime', 'Aventura', 'Shonen'],
    trailer: 'assets/trailer1.mp4',
    link: 'https://pt.wikipedia.org/wiki/One_Piece',
  },
  {
    id: 2,
    Image: 'assets/filme2.jpeg',
    Title: 'Arcane',
    desc: 'Baseada no universo de League of Legends, esta série animada mergulha nas tensões entre as cidades de Piltover e Zaun, explorando a origem de personagens icônicos',
    genres: ['Drama', 'Fantasia Científica', 'SteamPunk'],
    trailer: 'assets/trailer2.mp4',
    link: 'https://pt.wikipedia.org/wiki/Arcane',
  },
  {
    id: 3,
    Image: 'assets/filme3.jpg',
    Title: 'Jogador nº 1',
    desc: 'Em um futuro imersivo, jogadores competem em um vasto universo de realidade virtual para conquistar um prêmio que muda vidas. Repleto de referências à cultura pop.',
    genres: ['Ficção Científica', 'Distópico', 'Ação'],
    trailer: 'assets/trailer3.mp4',
    link: 'https://pt.wikipedia.org/wiki/Ready_Player_One_(filme)',
  },
  {
    id: 4,
    Image: 'assets/filme4.jpg',
    Title: 'The Boys',
    desc: 'Uma sátira sombria onde super-heróis, corrompidos pelo poder, são enfrentados por um grupo de vigilantes que buscam expor a verdade.',
    genres: ['Humor Ácido', 'Super-Heroi', 'Suspense'],
    trailer: 'assets/trailer4.mp4',
    link: 'https://pt.wikipedia.org/wiki/The_Boys_(série_de_televisão)',
  },
  {
    id: 5,
    Image: 'assets/filme5.jpg',
    Title: 'Homem-Aranha no Aranhaverso',
    desc: 'Miles Morales descobre que não está sozinho como Homem-Aranha, em uma animação visualmente impressionante cheia de heróis de diferentes realidades.',
    genres: ['Animação', 'Ação', 'Super-Heroi'],
    trailer: 'assets/trailer5.mp4',
    link: 'https://pt.wikipedia.org/wiki/Spider-Man:_Into_the_Spider-Verse',
  },
  {
    id: 6,
    Image: 'assets/filme6.jpg',
    Title: 'Batman (2022)',
    desc: 'O Cavaleiro das Trevas enfrenta novos desafios em Gotham, em uma versão mais sombria e investigativa do herói, enquanto enfrenta o Charada.',
    genres: ['Suspense', 'Drama', 'Super-Heroi'],
    trailer: 'assets/trailer6.mp4',
    link: 'https://pt.wikipedia.org/wiki/The_Batman_(filme)',
  },
]

document.addEventListener('DOMContentLoaded', function () {
  const movieList = document.getElementById('movie-list');

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); // a ia fez isso kkkk

  filmes.forEach(filme => {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('movie');

    movieDiv.innerHTML = `
      
      <div class="movie-banner">
      <a href="${filme.link}" target="_blank">
        <img src="${filme.Image}" alt="${filme.Title}">
        <video src="${filme.trailer}" muted></video>
      </a>
      </div>
      <div class="movie-info">
        <div class="movie-title">
          <h1>${filme.Title}</h1>
        </div>
        <div class="movie-desc">
          <p>${filme.desc}</p>
        </div>
        <div class="movie-genre">
          <p>${filme.genres.join(', ')}</p>
        </div>
      </div>
    `;

    const imgElement = movieDiv.querySelector('img');
    const videoElement = movieDiv.querySelector('video');

    movieDiv.addEventListener('mouseover', () => {
      if (!isMobile) {
        imgElement.style.display = 'none';
        videoElement.style.display = 'block';
        videoElement.play();
      }
    });

    movieDiv.addEventListener('mouseout', () => {
      if (!isMobile) {
        imgElement.style.display = 'block';
        videoElement.style.display = 'none';
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    });

    movieDiv.addEventListener('click', () => { // a ia fez isso kkkk
      if (isMobile) {
        videoElement.muted = false;
        videoElement.play();
        videoElement.style.display = 'block';
        imgElement.style.display = 'none';
      } else {
        window.open(filme.link, '_blank');
      }
    });

    movieList.appendChild(movieDiv);
  });
});
