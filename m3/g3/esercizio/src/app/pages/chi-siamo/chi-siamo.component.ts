import { Component } from '@angular/core';
import { iPost } from '../../models/interface';
import { PostSvcService } from '../../post-svc.service';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrl: './chi-siamo.component.scss'
})
export class ChiSiamoComponent {


  postArrays:iPost[] = []

  constructor(private postService:PostSvcService){}

  ngOnInit() {
    this.postService.getInactivePost()
    .then(post => this.postArrays = post)
  }
}
