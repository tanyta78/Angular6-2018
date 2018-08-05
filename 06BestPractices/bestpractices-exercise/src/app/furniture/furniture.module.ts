import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import {NgxPaginationModule} from 'ngx-pagination';

import { furnitureComponents } from "./index";
import { FurnitureService } from "./furniture.service";
import { FurnitureRoutingModule } from "./furniture-routing.module";


@NgModule({
	declarations: [
		...furnitureComponents
	],
	imports: [
		CommonModule,
		FormsModule,
		FurnitureRoutingModule,
		NgxPaginationModule
	],
	providers: [
		FurnitureService
	]
})
export class FurnitureModule {

}