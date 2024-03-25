import { Component } from '@angular/core';
import { iAuto } from '../../models/auto';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {

  autoArrays: iAuto[] = []

  constructor(private autoSvc:ServiceService){}

  ngOnInit(){
    this.autoSvc.getFordAuto()
    .then(res => {
      this.autoArrays = res
    })
  }

}
