import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlog, IUser } from './entities';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url = "https://jsonplaceholder.typicode.com"

  constructor( private http: HttpClient) { }

  fetchAll(){
    return this.http.get<IBlog[]>(`${this.url}/posts`);
  }

  fetchUsers(){
    return this.http.get<IUser[]>(`${this.url}/users`);
  }

  fetchOne(id:any){
    return this.http.get<IBlog>(`${this.url}/posts/${id}`);
  }


}
