import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService{
	recipeSelected=new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe('Test name1','1test descr test','https://images.media-allrecipes.com/images/75131.jpg'),
		new Recipe('Test name2','2test descr test','https://images.media-allrecipes.com/images/75131.jpg'),
		new Recipe('Test name3','3test descr test','https://images.media-allrecipes.com/images/75131.jpg')
	  ];

	  getRecipes(){
		  return this.recipes.slice();
	  }
}