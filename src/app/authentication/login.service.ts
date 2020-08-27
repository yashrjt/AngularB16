import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  headers=new HttpHeaders({'content-type':'appliation/json'});
  
  login(cred){
  console.log("LoginService -> login -> cred", cred)
      this.http.post('localhost:8080/api/login',cred,{headers:this.headers})
  }
}
