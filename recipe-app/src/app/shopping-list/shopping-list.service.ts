import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();

	private ingredients: Ingredient[] = [
		new Ingredient('Apple', 5),
		new Ingredient('Wheat', 2)
	];

	getIngredients() {
		return this.ingredients.slice();
	}

	addIngredient(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	
	addIngredients(ingredients: Ingredient[]) {
		this.ingredients.push(...ingredients);
		let grouped = [];
		this.ingredients.forEach(function (o) {
			if (!this[o.name]) {
				this[o.name] = { name: o.name, amount: 0 };
				grouped.push(this[o.name]);
			}
			this[o.name].amount += o.amount;
		}, Object.create(null));
		this.ingredients=grouped;
		
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}