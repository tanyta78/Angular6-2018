import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FurnitureModel } from './models/furniture.model';
import { FurnitureAllModel } from './models/furnitureAll.model';

const createUrl="http://localhost:5000/furniture/create";
const allUrl="http://localhost:5000/furniture/all";
const detailsUrl="http://localhost:5000/furniture/details/";
const myUrl="http://localhost:5000/furniture/mine";
const deleteUrl="http://localhost:5000/furniture/delete/";


@Injectable({
  providedIn: 'root'
})
export class FurnitureService {

  constructor(private http:HttpClient) { }

  createFurniture(body: FurnitureModel){
    return this.http.post(createUrl,body);
  }

  getAllFurniture(){
    return this.http.get<FurnitureAllModel[]>(allUrl);
  }

  getFurnitureDetails( id:string){
    return this.http.get<FurnitureAllModel>(detailsUrl+id);
  }

  getMyFurniture(){
    return this.http.get<FurnitureAllModel[]>(myUrl);
  }

  deleteFurniture(id:string){
    return this.http.delete(deleteUrl+id);}
}
