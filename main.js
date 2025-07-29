let valeurDuCompteur = 0;

const divPrincipal = document.createElement("div");
const titreCompteur = document.createElement("h1");
titreCompteur.textContent = "My counter";
const compteur = document.createElement("h3");
compteur.textContent = valeurDuCompteur;
const boutonIncrementer = document.createElement("button");
boutonIncrementer.textContent = "Incrémenter +";
const boutonDecrementer = document.createElement("button");
boutonDecrementer.textContent = "Décrémenter -";
const boutonReset = document.createElement("button");
boutonReset.textContent = "Reset";
const spanInput = document.createElement("span");
const enterInput = document.createElement("input");

document.body.appendChild(divPrincipal);
divPrincipal.appendChild(titreCompteur);
divPrincipal.appendChild(compteur);
divPrincipal.appendChild(boutonIncrementer);
divPrincipal.appendChild(boutonDecrementer);
divPrincipal.appendChild(boutonReset);
divPrincipal.appendChild(spanInput);
divPrincipal.appendChild(enterInput);

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
  console.log(e.button);
});
enterInput.addEventListener("keyup", () => {
  spanInput.innerText = enterInput.value;
  valeurDuCompteur = parseInt(enterInput.value);
  if (isNaN(valeurDuCompteur)) {
    valeurDuCompteur = 0;
    compteur.textContent = 0;
  } else if (valeurDuCompteur < 0 || valeurDuCompteur > 999) {
    valeurDuCompteur = 0;
    compteur.textContent = 0;
  } else {
    compteur.textContent = valeurDuCompteur;
  }
});
