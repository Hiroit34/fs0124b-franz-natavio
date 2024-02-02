/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let index = 0; index < pets.length; index++) {
  const animali = pets[index];

  console.log(animali);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

for (let index = 0; index < pets.length; index++) {
  const animali = pets[index];
  pets.sort();
}
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

for (let index = 0; index < pets.length; index++) {
  const animali = pets[index];
  const animaliOrdinati = pets.sort().reverse();
}
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const primoAnimale = pets.shift();
pets.push(primoAnimale);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let index = 0; index < cars.length; index++) {
  cars[index]["licensePlate"] = Math.floor(Math.random() * 101);
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const ferrari = {
  brand: "Ferrari",
  model: "812",
  color: "red",
  trims: ["Superfast", "Novitec"],
};
cars.push(ferrari);
console.log(cars);

console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  const trimsDeleted = cars[i]["trims"].slice(0, 1);
  justTrims.push(trimsDeleted);
}

console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  const macchina = cars[i];
  if (cars[i]["color"][0] === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
console.log(numericArray.indexOf(32));
i = 0;
while (i < numericArray.indexOf(32)) {
  console.log(numericArray[i]);

  i++;
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const alphabetArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const newArray = [];

switch (("g", "n", "u", "z", "d")) {
  case "a":
    newArray.push(1);
  case "b":
    newArray.push(2);
  case "c":
    newArray.push(3);
  case "d":
    newArray.push(4);
  case "e":
    newArray.push(5);
  case "f":
    newArray.push(6);
  case "g":
    newArray.push(7);
  case "h":
    newArray.push(8);
  case "i":
    newArray.push(9);
  case "k":
    newArray.push(10);
  case "l":
    newArray.push(11);
  case "m":
    newArray.push(12);
  case "n":
    newArray.push(13);
  case "o":
    newArray.push(14);
  case "p":
    newArray.push(15);
  case "q":
    newArray.push(16);
  case "r":
    newArray.push(17);
  case "s":
    newArray.push(18);
  case "t":
    newArray.push(19);
  case "u":
    newArray.push(20);
  case "v":
    newArray.push(21);
  case "w":
    newArray.push(22);
  case "x":
    newArray.push(23);
  case "y":
    newArray.push(24);
  case "z":
    newArray.push(25);
  case 25:
    newArray.push(26);
  case 26:
    newArray.push(27);
  default:
    break;
}
console.log(newArray);
