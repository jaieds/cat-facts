const proImage = document.getElementById('pro-img');
const factsList = document.getElementById('fact');
const nextButton = document.getElementById('next');

const catsFactsURL = `https://catfact.ninja/fact`;
const imagesArray = [
  '0.jpg',
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
];

async function setCatImage() {
  try {
    const rndIndx = Math.floor(Math.random() * 12);
    proImage.style.backgroundImage = `url("/cat-facts/images/${imagesArray[rndIndx]}")`;
  } catch (e) {
    console.log(e);
  }
}

async function setCatFacts() {
  try {
    const data = await fetch(catsFactsURL);
    const fact = await data.json();
    const listElement = document.createElement('p');
    listElement.innerText = fact.fact;
    factsList.appendChild(listElement);
  } catch (e) {
    console.log(e);
  }
}

function run() {
  setCatFacts();
  setCatImage();
}

function nextFact() {
  factsList.innerHTML = '';
  setCatFacts();
}

run();

nextButton.addEventListener('click', nextFact);
