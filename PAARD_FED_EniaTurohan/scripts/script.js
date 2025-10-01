// JavaScript Document
console.log("hi");


//DARK MODE KNOP

const toggleButton = document.getElementById("dark-mode");

toggleButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  // knoptekst aanpassen
  if (document.documentElement.classList.contains("dark")) {
    toggleButton.textContent = "Light Mode";
  } else {
    toggleButton.textContent = "Dark Mode";
  }
});

//PARTY KNOP

const discoknop = document.querySelector('li[aria-label="rainbow"] button');
const body = document.body;

discoknop.addEventListener("click", () => {
  // Roze achtergrond
  body.classList.add("disco-background");

  // Alle headings laten bouncen
  const headings = document.querySelectorAll("h1, h2");
  headings.forEach(h => {
    h.classList.add("disco-animate");
  });

  // Confetti 
  confetti({ particleCount: 450, spread: 100, origin: { y: 0.7 } });
});





/* JOUW CODE HIER - stap 4 */

// stap 1: zoek de menu-button op en sla die op in een variabele
var openButton = document.querySelector("header > button");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
openButton.onclick = openMenu;

// stap 3: voeg in de functie een class toe aan de nav
function openMenu() {  
  // zoek de nav op
  var deNav = document.querySelector("header > nav");
  // voeg class toe aan nav
  deNav.classList.add("toonMenu");
}



/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// stap 1 - zoek sluiten button op
var sluitButton = document.querySelector("nav button");

// stap 2 - laat die button luisteren naar kliks
sluitButton.onclick = sluitMenu;

// stap 3 - in de functie verwijder de class van de nav
function sluitMenu() {
  var deNav = document.querySelector("header > nav");
  deNav.classList.remove("toonMenu");
}



/**********************************/
/* bonus: menu sluiten met escape */
/**********************************/
window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}



    

