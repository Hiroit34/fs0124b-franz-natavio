"use strict";
class User {
    constructor(nome, cognome) {
        this.credito = 0;
        this.nChiamate = 0;
        this.nome = nome;
        this.cognome = cognome;
    }
    ricarica(ricarica) {
        return this.credito += ricarica;
    }
    chiamata(minuti) {
        if ((this.credito - minuti * 0.20) < 0) {
            console.log(`non puoi effettuare chiamate. Credito residuo:${this.credito}`);
        }
        else {
            console.log(`Credito residuo: ${this.credito}`);
        }
        this.credito -= minuti * 0.20;
        this.nChiamate += minuti;
    }
    azzeraChiamte() {
        return this.nChiamate = 0;
    }
}
let a = new User("Franz", "Natavio");
console.log(a.nome);
console.log(a.cognome);
a.ricarica(5);
a.chiamata(3);
a.chiamata(3);
a.chiamata(3);
a.chiamata(3);
a.chiamata(3);
a.chiamata(3);
a.chiamata(3);
a.chiamata(3);
a.chiamata(3);
a.chiamata(3);
a.chiamata(3);
console.log(a.nChiamate);
console.log(a.credito);
