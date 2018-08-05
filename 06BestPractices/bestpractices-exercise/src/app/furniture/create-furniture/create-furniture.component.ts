import { Component, OnInit } from '@angular/core';
import { FurnitureModel } from '../models/furniture.model';
import { FurnitureService } from '../furniture.service';

@Component({
  selector: 'app-create-furniture',
  templateUrl: './create-furniture.component.html',
  styleUrls: ['./create-furniture.component.css']
})
export class CreateFurnitureComponent implements OnInit {
  bindingModel:FurnitureModel;
  makePattern="";//•	Make and Model must be at least 4 symbols long
  modelPattern="";
  yearPattern="";//•	Year must be between 1950 and 2050
  descriptionPattern="";//•	Description must be more than 10 symbols
  pricePattern="";//•	Price must be a positive number
  imagePattern="";//requered



  constructor(private furnitureService:FurnitureService) { }

  ngOnInit() {
    this.bindingModel=new FurnitureModel('','',1955,'',0,'');
  }

  create(){
    this.furnitureService.createFurniture(this.bindingModel).subscribe();
  }

}
