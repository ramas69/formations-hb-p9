import { Component, inject, OnInit } from '@angular/core';
import { IBlog } from '../../shared/entities';
import { BlogService } from '../../shared/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  articles:IBlog[]=[];
  service= inject(BlogService)

  ngOnInit():void{
    this.getBlog();
  }

  getBlog(){
    this.service.fetchAll().subscribe(data => {
      this.articles = data;
    })
  }




}
