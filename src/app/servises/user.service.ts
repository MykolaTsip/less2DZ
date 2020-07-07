import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {Post} from '../models/Post';
import {Comment} from '../models/Comment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  users(): Observable<User[]>  {
      return  this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  posts(id): Observable<Post[]> {
        return this.http.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
  comments(id): Observable<Comment[]> {
     return  this.http.get<Comment[]>(`http://jsonplaceholder.typicode.com/comments?postId=${id}`);
  }
}
