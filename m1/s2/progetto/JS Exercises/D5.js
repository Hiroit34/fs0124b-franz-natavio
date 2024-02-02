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

for (let i = 0; i < alphabetArr.length; i++) {
  switch (i + 1) {
    case 1:
      newArray.push(1);
      break;
    case 2:
      newArray.push(2);
      break;
    case 3:
      newArray.push(3);
      break;
    case 4:
      newArray.push(4);
      break;
    case 5:
      newArray.push(5);
      break;
    case 6:
      newArray.push(6);
      break;
    case 7:
      newArray.push(7);
      break;
    case 8:
      newArray.push("h");
      break;
    case 9:
      newArray.push("i");
      break;
    case 10:
      newArray.push("j");
      break;
    case 11:
      newArray.push("k");
      break;
    case 12:
      newArray.push("l");
      break;
    case 13:
      newArray.push("m");
      break;
    case 14:
      newArray.push("n");
      break;
    case 15:
      newArray.push("o");
      break;
    case 16:
      newArray.push("p");
      break;
    case 17:
      newArray.push("q");
      break;
    case 18:
      newArray.push("r");
      break;
    case 19:
      newArray.push("s");
      break;
    case 20:
      newArray.push("t");
      break;
    case 21:
      newArray.push("u");
      break;
    case 22:
      newArray.push("v");
      break;
    case 23:
      newArray.push("w");
      break;
    case 24:
      newArray.push("x");
      break;
    case 25:
      newArray.push("y");
      break;
    case 26:
      newArray.push("z");
      break;
    default:
      break;
  }
}
console.log(newArray);
