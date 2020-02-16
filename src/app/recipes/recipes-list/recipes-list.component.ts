import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Broccoli Soup', 'Soup w/ broc and cheese',
      'https://upload.wikimedia.org/wikipedia/commons/5/50/Broccoli_and_cheese_soup_preparation_2.jpg'),
    new Recipe('Mushroom Soup', 'Soup w/ mushrooms and cheese',
      'https://live.staticflickr.com/4527/38072708035_347268d2f2_b.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
