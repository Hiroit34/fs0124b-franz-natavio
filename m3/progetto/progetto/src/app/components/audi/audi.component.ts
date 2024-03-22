import { Component } from '@angular/core';
import { iAuto } from '../../models/auto';
import { ServiceService } from '../../service.service';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {

  autoArrays: iAuto[] = []

  constructor(private autoSvc:ServiceService){}

  ngOnInit(){
    this.autoSvc.getAudiAuto()
    .then(res => {
      this.autoArrays = res
    })
  }

}
