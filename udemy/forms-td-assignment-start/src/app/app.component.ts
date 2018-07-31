import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') formHmw: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubs = 'Advanced';
  dataInfo={
    email:'',
    subs:'',
    pass:''
  };
  inputData={
    email:'',
    subs:'',
    pass:''
  };

  onSubmit() {
    console.log(this.formHmw.value);
    this.dataInfo.email=this.formHmw.value.email;
    this.dataInfo.subs=this.formHmw.value.subscriptions;
    this.dataInfo.pass=this.formHmw.value.password;
    this.formHmw.reset();
  }

  get diagnostic() { return JSON.stringify(this.inputData); }

}
