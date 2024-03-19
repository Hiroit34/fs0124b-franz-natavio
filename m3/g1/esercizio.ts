interface Smartphone {
    credito: number
    nChiamate: number
}

class User implements Smartphone {
    nome: string
    cognome: string
    credito: number = 0
    nChiamate: number = 0

    constructor(nome: string, cognome: string) {
        this.nome = nome
        this.cognome = cognome
    }

    ricarica(ricarica: number):number {
        return this.credito += ricarica
    }
    chiamata(minuti: number):void {
        if ((this.credito - minuti * 0.20) < 0) {
            console.log (`non puoi effettuare chiamate. Credito residuo:${this.credito}`)
        } else {
            console.log (`Credito residuo: ${this.credito}`)
        }
        this.credito -= minuti * 0.20
        this.nChiamate += minuti
    }
    azzeraChiamte():number {
        return this.nChiamate = 0
    }
}

let a = new User("Franz", "Natavio");
console.log(a.nome);
console.log(a.cognome);
a.ricarica(5)
a.chiamata(3)
a.chiamata(3)
a.chiamata(3)
a.chiamata(3)
a.chiamata(3)
a.chiamata(3)
a.chiamata(3)
a.chiamata(3)
a.chiamata(3)
a.chiamata(3)
console.log(a.nChiamate)
console.log(a.credito)
