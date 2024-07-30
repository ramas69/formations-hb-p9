import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlog, IUser } from './entities';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url = environment.apiURL

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
