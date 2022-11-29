import {
    getCharactersFrom,
    createArrayObjects,
    filterCompare,
    filterAscendent,
    filterDescendent,
} from "./data.js";

import data from "./data/harrypotter/data.js";

const searchInput = document.getElementById("search-character");
const clean = document.getElementById("clean-button");
const seeCharactersButton = document.getElementById("see all characters");

let statsSection = document.getElementById("main-counter");
let maleSection = document.getElementById("male-counter");
let femaleSection = document.getElementById("female-counter");
let list = document.getElementById("characteresList");
let orderAscendent = document.getElementById("filterAscendent");
let orderDescendent = document.getElementById("filterDescendent");

let charactersNameHouse = createArrayObjects(data);

clean.addEventListener("click", cleanDisplay);
searchInput.addEventListener("keyup", searchRealTime);

orderAscendent.addEventListener("click", () => {
    list.innerHTML = "";
    printElements(filterAscendent(charactersNameHouse));
});

orderDescendent.addEventListener("click", () => {
    list.innerHTML = "";
    printElements(filterDescendent(charactersNameHouse));
});

seeCharactersButton.addEventListener("click", () => {
    list.innerHTML = "";
    printElements(getCharactersFrom(data));
});

function printElements(elements) {
    printTotalAmountCharacters(elements.length);
    printTotalAmountMaleCharacters(
        elements.filter((character) => character.gender == "Male").length);
    printTotalAmountFemaleCharacters(
        elements.filter((character) => character.gender == "Female").length);
    createCharacterCard(elements);
}

function createCharacterCard(elements) {
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
    printElements(elements);
}

function cleanDisplay() {
    searchInput.value = "";
    list.innerHTML = "";
}

function printTotalAmountCharacters(amount) {
    statsSection.innerHTML = "";
    statsSection.innerHTML = `<div class = "main-counter">
        <p> ${amount} characters found</p>
    </div>`;
}

function printTotalAmountMaleCharacters(amount) {
    maleSection.innerHTML = "";
    maleSection.innerHTML = `<div class = "male-counter">
        <p> ${amount} Male characters found</p>
    </div>`;
}

function printTotalAmountFemaleCharacters(amount) {
    femaleSection.innerHTML = "";
    femaleSection.innerHTML = `<div class = "female-counter">
        <p> ${amount} Female characters found</p>
    </div>`;
}