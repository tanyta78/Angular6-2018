import { Action } from '@ngrx/store';
import { RecipeListModel } from '../../recipes/models/recipe-list.model';

export const GET_ALL_RECIPES = '[RECIPES] Get All';
export const GET_RECIPE_DETAIL = '[RECIPES] Get Detail';
export const GET_RECIPE_TO_EDIT = '[RECIPES] Get Recipe To Edit'

export class GetAllRecipes implements Action {
  type: string = GET_ALL_RECIPES;
  constructor(public payload: RecipeListModel[]) { }
}

export class GetRecipeDetail implements Action {
  type: string = GET_RECIPE_DETAIL;
  constructor(public payload: RecipeListModel) { }
}

export class GetRecipeToEdit implements Action {
  type: string = GET_RECIPE_TO_EDIT;
  constructor(public payload: RecipeListModel) { }
}

export type Types = GetAllRecipes 
  | GetRecipeDetail
  | GetRecipeToEdit;