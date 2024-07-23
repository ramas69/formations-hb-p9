import { Component, inject, OnInit } from '@angular/core';
import { IBlog, IUser } from '../../shared/entities';
import { BlogService } from '../../shared/blog.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  articles:IBlog[]=[];
  users:IUser[]= []
  service= inject(BlogService)

  ngOnInit():void{
    this.getBlog();
    this.getUsers();
  
  }

  getBlog(){
    this.service.fetchAll().subscribe(data => {
      this.articles = data;
    })
  }

  getUsers(){
    this.service.fetchUsers().subscribe(
      data => this.users = data,
      error => console.error("User not found", error)
    )
  }

  getUserName( userId:number){
    const user = this.users.find( username => username.id === userId);
    return user ? user.name : 'Pas de User trouvé' ;
  }


  


}
