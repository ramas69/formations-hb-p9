import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlog } from './entities';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url = "https://jsonplaceholder.typicode.com/posts"

  constructor( private http: HttpClient) { }

  fetchAll(){
    return this.http.get<IBlog[]>(this.url);
  }


}
