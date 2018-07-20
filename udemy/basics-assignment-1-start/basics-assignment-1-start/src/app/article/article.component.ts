import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  title:string = 'My article';
  description:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, expedita iure. Voluptatum, mollitia debitis? Odit deleniti laborum numquam ab ipsa ipsam iusto sit a distinctio voluptates, voluptas et excepturi qui";
  isDisplayed:boolean=false;
  textBtnDetails='Display';
  clickedArray=[];
  isClicked=false;

  constructor() { }

  ngOnInit() {
  }

  toggleParagraph(){
    this.isDisplayed=!this.isDisplayed;
    this.textBtnDetails=this.textBtnDetails==="Display"?"Hide":"Display";
    this.isClicked=true;
    this.clickedArray.push(this.textBtnDetails);
  }

  getColor(i){
    return i > 4 ? "blue":"white";
  }
}
