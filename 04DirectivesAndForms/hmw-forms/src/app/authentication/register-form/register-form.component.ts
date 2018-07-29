import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../models/register-model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  model: RegisterModel;
  unamePattern = "^[A-Z][a-zA-Z0-9]*$";
  passPattern = "^[a-zA-Z0-9]{4,16}$";
  namePattern = "^[A-Z][a-zA-Z]*$";
  emailPattern = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
  registerFailed: boolean;
  errMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.model = new RegisterModel('Test', '1234', 'FirstTest', 'LastTest', 'email@test.rr', 4);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  onSubmit() {
    delete this.model['confirmPassword'];
    //console.log(this.model);
    this.authService.register(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/login'])
        },
        err => {
          this.registerFailed = true;
          this.errMessage = err.error.description;
    });
  }

}
