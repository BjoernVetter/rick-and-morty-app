export function CharacterCard(character) {
  const newCard = document.createElement("li");
  newCard.classList.add("card");
  newCard.innerHTML = `<div class="card__image-container">
                <img
                  class="card__image"
                  src=${character.image}
                  alt="Rick Sanchez"
                />
                <div class="card__image-gradient"></div>
              </div>
              <div class="card__content">
                <h2 class="card__title">${character.name}</h2>
                <dl class="card__info">
                  <dt class="card__info-title">${character.status}</dt>
                  <dd class="card__info-description">Alive</dd>
                  <dt class="card__info-title">${character.type}</dt>
                  <dd class="card__info-description"></dd>
                  <dt class="card__info-title">${character.episode[0]}</dt>
                  <dd class="card__info-description">51</dd>
                </dl>
              </div>
    `;
  return newCard;
}







// forEach(function (fetchCharacters) {

//   console.log('test');
//   return fetchCharacters;
// });











// const name = ["bird", "cat", "dog", "ferret", "fish"];
// pets.forEach((pet) => {
//   const petElement = document.createElement("p");
//   petElement.textContent = pet;
//   document.body.append(petElement);
// });
