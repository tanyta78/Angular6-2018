import { Component, OnInit } from '@angular/core';
import { FurnitureAllModel } from '../models/furnitureAll.model';
import { FurnitureService } from '../furniture.service';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-furniture-details',
  templateUrl: './furniture-details.component.html',
  styleUrls: ['./furniture-details.component.css']
})
export class FurnitureDetailsComponent implements OnInit {
  selectedFurniture: Observable<FurnitureAllModel>;
  id:string;

  constructor(private furnitureService: FurnitureService, private route: ActivatedRoute) {  this.id = this.route.snapshot.params['id'];}

  ngOnInit() {
   this.selectedFurniture = this.furnitureService.getFurnitureDetails(this.id);
   
  }

}
