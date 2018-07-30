import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { Router } from '@angular/router';
import { FurnitureAllModel } from '../models/furnitureAll.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures: Observable<FurnitureAllModel[]>;

  constructor(private furnitureService: FurnitureService,
              private router: Router) { }

  ngOnInit() {
    this.furnitures = this.furnitureService.getAllFurniture();
  }

}
