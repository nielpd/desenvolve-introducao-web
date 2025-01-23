const tenistas = [
  {
    Rank: 1,
    Nome: "Jannik Sinner",
    Nacionalidade: "it",
  },
  {
    Rank: 2,
    Nome: "Alexander Zverev",
    Nacionalidade: "de",
  },
  {
    Rank: 3,
    Nome: "Carlos Alcaraz",
    Nacionalidade: "es",
  },
  {
    Rank: 4,
    Nome: "Taylor Fritz",
    Nacionalidade: "us",
  },
  {
    Rank: 5,
    Nome: "Danill Medvedev",
    Nacionalidade: "ru",
  },
  {
    Rank: 6,
    Nome: "Casper Ruud",
    Nacionalidade: "no",
  },
  {
    Rank: 7,
    Nome: "Novak Djokovic",
    Nacionalidade: "rs",
  },
  {
    Rank: 8,
    Nome: "Alex de Minaur",
    Nacionalidade: "au",
  },
  {
    Rank: 9,
    Nome: "Andrey Rublev",
    Nacionalidade: "ru",
  },
  {
    Rank: 10,
    Nome: "Grigor Dimitrov",
    Nacionalidade: "bg",
  },
];

const tbody = document.querySelector("tbody");

tenistas.forEach((tenista) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${tenista.Rank}</td>
    <td>${tenista.Nome}</td>
    <td><span class="fi fi-${tenista.Nacionalidade}"></span></td>
  `;
  tbody.appendChild(tr);
});
