import { Component } from '@angular/core';
import { iAuto } from '../../models/auto';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {

  autoArrays: iAuto[] = []
  randomAuto: iAuto[] = []

  constructor(private autoSvc:ServiceService){}

  ngOnInit(){
    this.autoSvc.getFiatAuto()
    .then(res => {
      this.autoArrays = res;

    })
  }

}
