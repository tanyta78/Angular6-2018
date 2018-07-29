import { Component, OnInit } from '@angular/core';
import {LoginModel} from '../models/login.model';
import {AuthService} from '../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  model:LoginModel;
  loginFailed:boolean;
  errMessage:string;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
    this.model=new LoginModel('','');
  }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() { 
    this.authService.login(this.model)
      .subscribe(
        data=>{
          this.loginSuccess(data);
        },
        err=>{
          this.loginFailed=true;
          this.errMessage = err.error.description;
        }
      );
  }

  loginSuccess(data){
    this.authService.authtoken = data['_kmd']['authtoken'];
    localStorage.setItem('authtoken',data['_kmd']['authtoken']);
    localStorage.setItem('username', data['username']);
    this.router.navigate(['/home']);
  }

  
}
