import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'; 
import {Observable} from 'rxjs';

const endpoint= 'https://jsonplaceholder.typicode.com/posts';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  getAllPosts(){
    return this.http.get(endpoint);
  }
}
