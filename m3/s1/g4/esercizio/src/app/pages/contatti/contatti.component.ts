import { Component } from '@angular/core';
import { iPost } from '../../models/interface';
import { PostSvcService } from '../../post-svc.service';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrl: './contatti.component.scss'
})
export class ContattiComponent {

  postArrays:iPost[] = []

  constructor(private postService:PostSvcService){}

  ngOnInit() {
    this.postService.getActivePost()
    .then(post => this.postArrays = post)
  }

}
