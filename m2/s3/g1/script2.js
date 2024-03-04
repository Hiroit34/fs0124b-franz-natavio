let petNameField = document.getElementById("petName-field");
let ownerNameField = document.getElementById("ownerName-field");
let speciesField = document.getElementById("species-field");
let breedField = document.getElementById("breed-field");
let petList = document.getElementById("petList");
let addButton = document.getElementById("add");
let pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(otherPet) {
    if (this.ownerName === otherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const showList = function () {
  petList.innerHTML = ""; // <-- svuota la lista all'inizio
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = `Nome: ${pet.petName} Proprietario: ${pet.ownerName}`;
    petList.appendChild(newLi);
  });
};

addButton.addEventListener("click", function () {
  let newPet = new Pet(
    petNameField.value,
    ownerNameField.value,
    speciesField.value,
    breedField.value
  );
  pets.push(newPet);
  list();
  petNameField.value = "";
  ownerNameField.value = "";
  speciesField.value = "";
  breedField.value = "";
});

const list = function () {
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText = `Name: ${pet.petName} Owner: ${pet.ownerName} Breed: ${pet.breed} `;
    petList.appendChild(newLi);
  });
};

console.log(newLi[0].sameOwner(newLi[1]));
