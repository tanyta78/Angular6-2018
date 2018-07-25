import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() shopItemAdded= new EventEmitter<Ingredient>();
  @ViewChild('amountInput') amountInput:ElementRef;
  @ViewChild('nameInput') nameInput:ElementRef;



  constructor() { }

  ngOnInit() {
  }

  onShopItemAdded(){
    const newIngredient= new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value);
    this.shopItemAdded.emit(newIngredient);
  }

}
