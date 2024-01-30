/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numeroUno = 13;
const numeroDue = 56;

if (numeroDue > numeroUno) {
  console.log(numeroDue + " e piu grande di " + numeroUno);
} else {
  console.log(numeroDue + " e piu piccolo di " + numeroUno);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const a = 13;

if (a != 5) {
  console.log(a + " not eual " + 5);
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const b = 201;
const c = b % 5;

if (c == 0 || c == 5) {
  console.log("il numero " + b + " e divisibile per 5");
} else {
  console.log("il numero non e' divisibile per 5, il resto e' " + c);
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const d = 8;
const e = 2;

if (d == 8) {
  console.log("Il primo numero e' uguale a 8");
} else if (e == 8) {
  console.log("Il secondo numero e' uguale a 8");
} else if (d + e == 8) {
  console.log("La somma e' uguale a 8");
} else if (d - e == 8) {
  console.log("La sottrazione e' uguale a 8");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
{
  let totalShoppingCart = 1;
  let costoSpedizione = 10;
  let totale = totalShoppingCart + costoSpedizione;

  if (totalShoppingCart >= 50) {
    console.log("Hai la spedizione gratuita: totale " + totalShoppingCart);
  } else if (totalShoppingCart < 50) {
    console.log(
      "Non hai diritto alla spedizione gratuita. Costo spedizione 10eur. Totale: " +
        totale
    );
  }
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const totalShoppingCart = 37;
const costoSpedizione = 10;
const sconto = 0.2;
const totaleScontato = totalShoppingCart - totalShoppingCart * sconto;
const totale = totaleScontato + costoSpedizione;

if (totaleScontato >= 50) {
  console.log("Hai la spedizione gratuita: totale " + totaleScontato);
} else if (totaleScontato <= 49) {
  console.log(
    "Non hai diritto alla spedizione gratuita. Costo spedizione 10eur. Totale: " +
      totale
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const x = 13;
const y = 10;
const z = 2000;

if (y > x > z) {
  console.log("pippo");
} else if (z > y > x) {
  console.log("pippo2");
} else if (x > z > y) {
  console.log("pippo3");
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const f = 23;

if (f) {
  console.log(typeof f);
}
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const numeroTre = 32895;

if (numeroTre % 2 == 0) {
  console.log(numeroTre + " e' pari");
} else if (numeroTre % 2 != 0) {
  console.log(numeroTre + " e' dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 10) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
{
  const me = {
    name: "John",
    lastName: "Doe",
    skills: ["javascript", "html", "css"],
  };

  Object.assign(me, { city: "Toronto" });

  console.log(me);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
{
  const me = {
    name: "John",
    lastName: "Doe",
    skills: ["javascript", "html", "css"],
  };

  Object.assign(me, { city: "Toronto" });

  console.log(me);

  delete me.lastName;
}

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

Object.assign(me, { city: "Toronto" });

delete me.lastName;

me.skills.pop();

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
{
  list = [];

  list.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

  console.log(list);
}

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

list = [];
const nuovoValore = 100;

list.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

list[9] = nuovoValore;

console.log(list);
