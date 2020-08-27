import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import{ LoginService}  from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(private fb:FormBuilder,private l:LoginService) { }

  ngOnInit() {
    this.loginForm=this.fb.group({
      email:[''],
      password:['']
    })
  }

  loginHandler(){
    this.l.login(this.loginForm.value);
  
    this.loginForm.reset();
  }
}
