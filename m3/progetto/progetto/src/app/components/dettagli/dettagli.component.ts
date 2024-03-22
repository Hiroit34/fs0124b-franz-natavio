import { Component,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iAuto } from '../../models/auto';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrl: './dettagli.component.scss'
})
export class DettagliComponent {

  id: string = ''

  auto!: iAuto | undefined

  constructor(private router:ActivatedRoute){}


  ngOnInit(){
    this.router.params.subscribe((paramsRotta:any) => {

      this.id = paramsRotta.id
      console.log(this.id)

      this.getAllAutos()
      .then(res => res.find(autos => autos.id == this.id))
      .then(res => {
        this.auto = res
      })
    });
  }

  getAllAutos():Promise<iAuto[]> {
    return fetch('../assets/db.json')
    .then(res => res.json())
    .then((autos:iAuto[]) => autos )
}
}
