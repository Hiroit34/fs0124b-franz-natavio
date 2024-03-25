import { PostSvcService } from './../../post-svc.service';
import { Component } from '@angular/core';
import { iPost } from '../../models/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    postArrays:iPost[] = [];

    constructor(private postService:PostSvcService){}

    ngOnInit() {
        this.postService.getAllPost()
        .then(posts => {
            this.postArrays = posts
            console.log(this.postArrays)
        })
    }
}
