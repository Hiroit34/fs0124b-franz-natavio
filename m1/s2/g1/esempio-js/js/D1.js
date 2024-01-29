/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in JavaScript sono: Stringa, Numeri e Boolean.
La stringa e' una serie di caratteri tra le doppie virgolette ("") o singole quote (''). All'interno delle virgolette come detto precedentemente ci possono essere una serie di caratteri tra cui i numeri.
I numeri sono un datatype che non include le virgolette o single quote, che le indentificherebbe come stringa, quindi semplicemente numeri senza l'aggiunta di ulteriori caratteri. Tuttavia i numeri possono essere anche decimali.
I boolean sono un datatype che restituisce come valore true o false. Simile ad un'interruttore swtich on/off. */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const myName = "Franz";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numeroUno = 12;
let numeroDue = 20;
let risultato = numeroUno + numeroDue;
console.log(risultato);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

const x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

const myName = "Natavio";
console.log(myName);

/* non e' possibile riassegnare una variabile const poiche const, nonostante sia una variabile, si comporta come un contenitore dati con valore fisso una volta che si e' dichiarato il valore. Percio' non si puo riassegnare una variabile con il costrutto const. */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

const numeroQuattro = 4;

let risultatoDue = x - numeroQuattro;

console.log(risultatoDue);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = "john";
let name2 = "John";

name2 = name2.toLowerCase();

console.log(name1 === name2);
