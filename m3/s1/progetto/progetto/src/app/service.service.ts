import { Injectable, model } from '@angular/core';
import { iAuto } from './models/auto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    autoArrays:iAuto[] = []
    randomAutoArrays:iAuto[] = []


    getAllAutos():Promise<iAuto[]> {
        return fetch('../assets/db.json')
        .then(res => res.json())
        .then((autos:iAuto[]) => autos )
    }

    getFiatAuto():Promise<iAuto[]> {
        return this.getAllAutos()
        .then(autos => autos.filter(auto => auto.brand == 'Fiat'))
    }
    getFordAuto():Promise<iAuto[]> {
        return this.getAllAutos()
        .then(autos => autos.filter(auto => auto.brand == 'Ford'))
    }
    getAudiAuto():Promise<iAuto[]> {
        return this.getAllAutos()
        .then(autos => autos.filter(auto => auto.brand == 'Audi'))
    }

    getRandomAutos(n: number){
      for(let i = 0; i < n; i++){
        let random = Math.floor(Math.random() * this.autoArrays.length)

        this.randomAutoArrays.push(this.autoArrays[random])
      }
    }

}
