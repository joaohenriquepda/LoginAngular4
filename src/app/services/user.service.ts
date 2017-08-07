import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User }  from '../models/index';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) { }

  getAll(){
    return this.http.get('https://jsonplaceholder.typicode.com/users',  this.jwt())
      .map((response : Response) => response.json());
  }

  getById(id:number){
    return  this.http.get('/api/users/'+id, this.jwt())
      .map( ( response: Response) => response.json());
  }

  create(user: User){ 
    return this.http.post('https://jsonplaceholder.typicode.com/users', user, this.jwt())
      .map((response: Response)=> {
          response.json()
          console.log(response);
          
      });
      
  }

  update(user: User){
    return this.http.put('api/user/' + user.id, user, this.jwt())
      .map((response: Response) => response.json());
  }
  
  delete(id: number){
    return this.http.delete('user/api'+id,this.jwt())
    .map((response: Response) => response.json());
  }

  private jwt(){
    //create authorization header  with  jwt token
    let  currentUser =  JSON.parse(localStorage.getItem('currentItem'));
    if(currentUser && currentUser.token){
      let headers = new Headers({ 'Authorization': 'Bearer'+currentUser.token })
       return new RequestOptions({headers:headers}); 
    }  
  }
}
