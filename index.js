import { CharacterCard } from "./components/CharacterCard/CharacterCard.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";
const apiUrl = "https://rickandmortyapi.com/api";
const newCard = CharacterCard();
cardContainer.append(newCard);
console.log(newCard);
async function fetchCharacters() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  console.log(response);
  if (!response.ok) {
    console.log("error");
    return null;
  }
  const parsedJSON = await response.json();
  console.log(parsedJSON);
  // return parsedJSON.data;
}
fetchCharacters();
console.log(fetchCharacters);
