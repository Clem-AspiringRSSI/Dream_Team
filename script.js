const team = [
  {
    nom: "Benoit ",
    photo: "Benoit.jpg",
    description: "Benoit,le futur magistrat de la dream team.1 de bodycount avec Anna mais je vais bientot faire croquer.Je pense j'ai plus de chance dans le rap mais sa faut pas l'dire.  "
  },
  {
    nom: "Luc",
    photo: "Luc.jpg",
    description: "Luc,futur kiné aka le plus gros baizeur de la dream team à l'heure actuelle.2 de bodycount et blindé aux as que demandez de mieux" 
  },
  {
    nom: "Thomas",
    photo: "Thomas.jpg",
    description: "Thomas,le futur ingé financier aka l'intello de la team qui peut se transformer en Diego sous alcool intense.1 de bodycount mais ça va péter sur Paris sous peu"
  },
  {
    nom: "Paulo",
    photo: "Paulo.jpg",
    description: "Paulo,le futur historien aka le nasique de la team qui  connait tout sur tout en histoire/géo.2 de bodycount en 1 semaine à Split."
  },
  {
    nom: "Raph",
    photo: "Raph.jpg",
    description: "Raph,le futur voyageur aka le vagabond en folie qui va découvrir le monde avant le monde lui-meme.0 de bodycount mais pidi elle a dit ça va aller "
  },
  {
    nom: "Clément",
    photo: "Clem.jpg",
    description: "Clement,le futur ingé cyber qui protègera la dream team sur internet tkt.0 de bodycount mais toujours prèt à faire bordel"
  }
];

const container = document.getElementById("cards-container");

team.forEach(pote => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${pote.photo}" alt="${pote.nom}" class="photo">
    <h2>${pote.nom}</h2>
    <p class="description">${pote.description}</p>
  `;

  container.appendChild(card);
});