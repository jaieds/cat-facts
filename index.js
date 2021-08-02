const catsImgURL = 'https://thatcopy.pw/catapi/rest/';
const catsFactsURL = 'https://cat-fact.herokuapp.com/facts/random';

const proImage = document.getElementById('pro-img');
const factsList = document.getElementById('fact');

async function setCatImage() {
  try {
    const data = await fetch(catsImgURL);
    const imgURL = await data.json();
    proImage.style.backgroundImage = `url("${imgURL.url}")`;
  } catch (e) {
    console.log(e);
  }
}

async function setCatFacts() {
  try {
    const data = await fetch(catsFactsURL);
    const fact = await data.json();
    const listElement = document.createElement('p');
    listElement.innerText = fact.text;
    factsList.appendChild(listElement);
  } catch (e) {
    console.log(e);
  }
}

async function run() {
  await setCatImage();
  await setCatFacts();
}

window.addEventListener('load', run);
