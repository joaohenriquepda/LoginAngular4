import { Injectable } from '@angular/core';
import {Http, Headers, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  constructor(private http : Http) { }

  login(username:string,password:string){
    return this.http.post('/api/authenticate',JSON.stringify({username:username,password:password}))
      .map((response: Response)=>{
        //If login successfull if there is a jwt token response
        let user =  response.json();
        if(user && user.token){
           localStorage.setItem('currentUser', JSON.stringify(user)); 
        }
          return user;
      });
  }  

  logout(){
    //remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

}
