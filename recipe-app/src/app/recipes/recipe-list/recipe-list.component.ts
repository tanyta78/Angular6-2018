import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test name1','1test descr test','https://images.media-allrecipes.com/images/75131.jpg'),
    new Recipe('Test name2','2test descr test','https://images.media-allrecipes.com/images/75131.jpg'),
    new Recipe('Test name3','3test descr test','https://images.media-allrecipes.com/images/75131.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeDetails(recipeEl:Recipe){
    this.recipeWasSelected.emit(recipeEl);
  }

}
