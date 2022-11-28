import {
  getCharactersFrom,
  createArrayObjects,
  filterCompare,
  filterAscendent,
  filterDescendent,
} from "./data.js";
import data from "./data/harrypotter/data.js";

const searchInput = document.getElementById("search-character");
const searchClose = document.getElementById("search-closeButton");
const seeCharactersButton = document.getElementById("see all characters");

let statsSection = document.getElementById("stats-info");
let maleSection = document.getElementById("male-info");
let femaleSection = document.getElementById("female-info");
let list = document.getElementById("characteresList");
let orderAscendent = document.getElementById("filterAscendent");
let orderDescendent = document.getElementById("filterDescendent");

let charactersNameHouse = createArrayObjects(data);

searchClose.addEventListener("click", closeSearch);
searchInput.addEventListener("keyup", searchRealTime);

orderAscendent.addEventListener("click", () => {
  list.innerHTML = "";
  listElements(filterAscendent(charactersNameHouse));
});

orderDescendent.addEventListener("click", () => {
  list.innerHTML = "";
  listElements(filterDescendent(charactersNameHouse));
});

searchClose.addEventListener("click", () => {
  searchInput.value = "";
  listElements(getCharactersFrom(data));
});

seeCharactersButton.addEventListener("click", () => {
  list.innerHTML = "";
  listElements(getCharactersFrom(data));
});

function listElements(elements) {
  printTotalAmountOfCharacters(elements.length);
  printTotalAmountOfMaleCharacters(
    elements.filter((character) => character.gender == "Male").length
  );
  printTotalAmountOfFemaleCharacters(
    elements.filter((character) => character.gender == "Female").length
  );
  printCharacterCard(elements);
}

function printCharacterCard(elements) {
  elements.forEach((element) => {
    let li = document.createElement("li");
    let span = document.createElement("span");
    let i = document.createElement("i");
    let p = document.createElement("p");

    li.className = "card-element";
    p.innerHTML = element.name;
    p.className = "card-p";
    i.className = "fa-solid fa-hat-wizard";
    i.id = "span-i";
    span.className = "card-span";

    if (element.house == "Gryffindor") {
      span.style.color = "#740001";
    } else if (element.house == "Hufflepuff") {
      span.style.color = "#F0C75E";
    } else if (element.house == "Slytherin") {
      span.style.color = "#2A623D";
    } else if (element.house == "Ravenclaw") {
      span.style.color = "#728DDA";
    } else {
      span.style.color = "gray";
    }

    list.appendChild(li);
    li.appendChild(span);
    span.appendChild(i);
    li.appendChild(p);
  });
}

function searchRealTime() {
  let cName = searchInput.value;
  list.innerHTML = "";
  let elements = filterCompare(data.characters, cName);
  listElements(elements);
}

function closeSearch() {
  searchInput.value = "";
  list.innerHTML = "";
  listElements(getCharactersFrom(data));
}
function printTotalAmountOfCharacters(amount) {
  statsSection.innerHTML = "";
  statsSection.innerHTML = `<div class = "stats-info">
        <p> ${amount} characters found</p>
    </div>`;
}

function printTotalAmountOfMaleCharacters(amount) {
  maleSection.innerHTML = "";
  maleSection.innerHTML = `<div class = "male-info">
        <p> ${amount} Male characters found</p>
    </div>`;
}

function printTotalAmountOfFemaleCharacters(amount) {
  femaleSection.innerHTML = "";
  femaleSection.innerHTML = `<div class = "female-info">
        <p> ${amount} Female characters found</p>
    </div>`;
}
