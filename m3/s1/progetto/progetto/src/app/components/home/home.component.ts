import { iAuto } from '../../models/auto';1
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  autoArrays: iAuto[] = []
  randomAutoArrays: iAuto[] = []


  ngOnInit(){
    fetch('../../../assets/db.json')
    .then(res => res.json())
    .then((auto:iAuto[]) => {
      this.autoArrays = auto

      this.getRandomAutos(2)
    })
  }

  getRandomAutos(n: number) {
    for(let i = 0; i < n; i++){
      let randomNumber = Math.floor(Math.random() * this.autoArrays.length)

      this.randomAutoArrays.push(this.autoArrays[randomNumber])
    }
  }

}
