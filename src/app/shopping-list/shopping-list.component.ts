import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Avocados', 3),
    new Ingredient('Queso', 4)
  ];

  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredientInfo: {nameInput: string, amountInput: number}) {
    this.ingredients.push({
      name: ingredientInfo.nameInput,
      amount: ingredientInfo.amountInput
    });
  }

}
