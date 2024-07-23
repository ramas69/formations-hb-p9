import { Component, inject, OnInit } from '@angular/core';
import { BlogService } from '../../shared/blog.service';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from '../../shared/entities';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent implements OnInit {

  service= inject(BlogService);
  route = inject(ActivatedRoute);
  article:IBlog |undefined;

  ngOnInit(): void {
    this.fetchOneArticle();
  }

  fetchOneArticle(){
    const id = this.route.snapshot.paramMap.get('id');
    this.service.fetchOne(id).subscribe( data => {
      this.article = data;
    })
  }




}
