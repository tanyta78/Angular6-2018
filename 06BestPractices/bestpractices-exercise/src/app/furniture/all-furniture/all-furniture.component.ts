import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { FurnitureService } from '../furniture.service';
import { FurnitureAllModel } from '../models/furnitureAll.model';
import { AuthService } from '../../authentication/auth.service';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures: Observable<FurnitureAllModel[]>;
  pageSize: number = 3;
  currentPage:number = 1;


  constructor(
    private furnitureService: FurnitureService,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService) { }

  ngOnInit() {
    this.furnitures = this.furnitureService.getAllFurniture();
  }

  pageChange(page){
    this.currentPage=page;
  }

  deleteItem(id:string){
    this.furnitureService.deleteFurniture(id).subscribe(()=>{
      this.furnitures = this.furnitureService.getAllFurniture();
      this.toastr.warning("Furniture deleted", "Warning!");
      this.router.navigate(["/furniture/all"]);
    });
  }

}
