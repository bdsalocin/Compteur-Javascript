let valeurDuCompteur = 0;

const createAndAddElement = (element, parent, contenu) => {
  const nouvelELement = document.createElement(element);
  parent.appendChild(nouvelELement);
  nouvelELement.textContent = contenu;
  return nouvelELement;
};

const divPrincipal = createAndAddElement("div", document.body);
const titreCompteur = createAndAddElement("h1", divPrincipal, "My Counter");
const compteur = createAndAddElement("h3", divPrincipal, valeurDuCompteur);
const boutonIncrementer = createAndAddElement(
  "button",
  divPrincipal,
  "Incrementer +"
);
const boutonDecrementer = createAndAddElement(
  "button",
  divPrincipal,
  "Decrementer -"
);
const boutonReset = createAndAddElement("button", divPrincipal, "Reset");
const spanInput = createAndAddElement("span", divPrincipal);
const enterInput = createAndAddElement("input", divPrincipal);

boutonIncrementer.addEventListener("click", (e) => {
  valeurDuCompteur += 1;
  compteur.textContent = valeurDuCompteur;

  if (valeurDuCompteur > 999) {
    alert("La valeur maximale est de 999");
    valeurDuCompteur = 0;
    compteur.textContent = 0;
  } else {
    compteur.textContent = valeurDuCompteur;
  }
  console.log(e.button);
});

boutonDecrementer.addEventListener("click", (e) => {
  valeurDuCompteur -= 1;
  compteur.textContent = valeurDuCompteur;

  if (valeurDuCompteur < 0) {
    alert("Impossible d'aller en dessous de 0");
    valeurDuCompteur = 0;
    compteur.textContent = 0;
  } else {
    compteur.textContent = valeurDuCompteur;
  }
  console.log(e.button);
});
boutonReset.addEventListener("click", (e) => {
  valeurDuCompteur = 0;
  compteur.textContent = valeurDuCompteur;
  enterInput.value = "";
  spanInput.textContent = " max : 999";
  console.log(e.button);
});
enterInput.addEventListener("keyup", () => {
  spanInput.innerText = enterInput.value;
  valeurDuCompteur = parseInt(enterInput.value);
  if (isNaN(valeurDuCompteur)) {
    valeurDuCompteur = 0;
    compteur.textContent = 0;
  } else if (valeurDuCompteur < 0 || valeurDuCompteur > 999) {
    alert("La limite est comprise entre 0 et 999");
    valeurDuCompteur = 0;
    compteur.textContent = 0;
    enterInput.value = "";
    spanInput.textContent = "entre 0 et 999 !";
  } else {
    compteur.textContent = valeurDuCompteur;
  }
});
