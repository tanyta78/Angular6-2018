import { Component, OnInit } from '@angular/core';
import { FurnitureAllModel } from '../models/furnitureAll.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FurnitureService } from '../furniture.service';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-edit-furniture',
  templateUrl: './edit-furniture.component.html',
  styleUrls: ['./edit-furniture.component.css']
})
export class EditFurnitureComponent implements OnInit {
  bindingModel: FurnitureAllModel

  constructor(
    private route: ActivatedRoute,
    private furnitureService: FurnitureService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    this.furnitureService.getFurnitureById(id)
      .subscribe(data => {
          this.bindingModel = data;
      })
  }

  edit(){
    this.furnitureService.editFurniture(this.bindingModel.id, this.bindingModel).subscribe(()=>{
      this.toastr.success('Edited Furniture','Success!');
      this.router.navigate(["/furniture/all"]);
    });
  }

 

}
