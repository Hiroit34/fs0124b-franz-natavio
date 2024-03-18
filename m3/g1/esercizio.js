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
        this.nChiamate += 1;
    }
    chiama404() {
        return this.credito;
    }
    getNumberChiamata() {
        return this.nChiamate += 1;
    }
    azzeraChiamte() {
        return this.nChiamate = 0;
    }
}
let a = new User("Franz", "Natavio");
console.log(a.nome);
console.log(a.cognome);
console.log(a.ricarica(5));
console.log(a.chiamata(40));
console.log(a.credito);
