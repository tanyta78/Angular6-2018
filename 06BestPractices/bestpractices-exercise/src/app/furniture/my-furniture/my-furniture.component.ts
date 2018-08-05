import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Observable } from 'rxjs';
import { FurnitureAllModel } from '../models/furnitureAll.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-furniture',
  templateUrl: './my-furniture.component.html',
  styleUrls: ['./my-furniture.component.css']
})
export class MyFurnitureComponent implements OnInit {
  furnitures:Observable<FurnitureAllModel[]>;
  pageSize: number = 3;
  currentPage:number = 1;

  constructor(
    private furnitureService:FurnitureService,
    private router: Router) { }

  ngOnInit() {
    this.furnitures=this.furnitureService.getMyFurniture();
  }

  deleteItem(id:string){
    this.furnitureService.deleteFurniture(id).subscribe(()=>{
      this.router.navigate(["/furniture/all"]);
    });
  }

  pageChange(page){
    this.currentPage=page;
  }

}
