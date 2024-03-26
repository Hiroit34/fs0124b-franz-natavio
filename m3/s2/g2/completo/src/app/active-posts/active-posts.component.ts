import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {

  active!: PostInterface[]

  constructor(private postSvc:PostServiceService) {}

  ngOnInit(){
    this.active = this.postSvc.getActivePosts()
  }

}
