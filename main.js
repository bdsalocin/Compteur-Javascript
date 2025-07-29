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

boutonIncrementer.addEventListener("click", () => {
  valeurDuCompteur += 1;
  compteur.textContent = valeurDuCompteur;
});
boutonDecrementer.addEventListener("click", () => {
  valeurDuCompteur -= 1;
  compteur.textContent = valeurDuCompteur;
  if (valeurDuCompteur < 0) {
    valeurDuCompteur = 0;
    compteur.textContent = 0;
  } else {
    compteur.textContent = valeurDuCompteur;
  }
});
boutonReset.addEventListener("click", () => {
  valeurDuCompteur = 0;
  compteur.textContent = valeurDuCompteur;
});
enterInput.addEventListener("keyup", () => {
  spanInput.innerText = enterInput.value;
  valeurDuCompteur = parseInt(enterInput.value);
  if (isNaN(valeurDuCompteur)) {
    valeurDuCompteur = 0;
    compteur.textContent = 0;
  } else if (valeurDuCompteur < 0) {
    valeurDuCompteur = 0;
    compteur.textContent = 0;
  } else {
    compteur.textContent = valeurDuCompteur;
  }
});

boutonIncrementer.addEventListener("click", () => {
  boutonIncrementer.style.backgroundColor = "red";
  if (boutonIncrementer.style.backgroundColor == "red") {
    boutonIncrementer.addEventListener("click", () => {
      boutonIncrementer.style.backgroundColor = "rgb(43, 43, 255)";
    });
  }
});

boutonDecrementer.addEventListener("click", () => {
  boutonDecrementer.style.backgroundColor = "green";
  if (boutonDecrementer.style.backgroundColor == "green") {
    boutonDecrementer.addEventListener("click", () => {
      boutonDecrementer.style.backgroundColor = "white";
    });
  }
});

boutonReset.addEventListener("click", () => {
  boutonReset.style.backgroundColor = "violet";
  if (boutonReset.style.backgroundColor == "violet") {
    boutonReset.addEventListener("click", () => {
      boutonReset.style.backgroundColor = "red";
    });
  }
});
