import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class AppWelcomeComponent implements OnInit {
  title = 'My Articles Library';
  username='';

  constructor() { }

  ngOnInit() {
  }

  isEmpty(){
    if(this.username===''){
      return false;
    }else{
      return true;
    }
  }

  onSaveUsername(){
    this.username='';
  }

}
