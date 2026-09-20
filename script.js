const team = [
  {
    nom: "Benoit ",
    photo: "Benoit.jpg",
    description: "Le futur magistrat de la dream team. 1 de bodycount avec Anna, mais je vais bientôt faire croquer. Je pense que j'ai plus de chance dans le rap, mais ça, faut pas le dire."
  },
  {
    nom: "Luc",
    photo: "Luc.jpg",
    description: "Futur kiné, aka le plus gros baiseur de la dream team à l'heure actuelle. 2 de bodycount et blindé aux as, que demander de mieux ?" 
  },
  {
    nom: "Thomas",
    photo: "Thomas.jpg",
    description: "Le futur ingé financier, aka l'intello de la team qui peut se transformer en Diego sous alcool intense. 3 de bodycount, mais ça va péter sur Paris sous peu."
  },
  {
    nom: "Paulo",
    photo: "Paulo.jpg",
    description: "Le futur historien, aka le nasique de la team qui connaît tout sur tout en histoire-géo. 2 de bodycount en 1 semaine à Split."
  },
  {
    nom: "Raph",
    photo: "Raph.jpg",
    description: "Le futur voyageur, aka le vagabond en folie qui va découvrir le monde avant le monde lui-même. 0 de bodycount, mais Pidi elle a dit ça va aller."
  },
  {
    nom: "Clément",
    photo: "Clem.jpg",
    description: "Le futur ingé cyber qui protégera la dream team sur internet tkt. 0 de bodycount, mais toujours prêt à faire le bordel."
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