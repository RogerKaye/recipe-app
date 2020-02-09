import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Broccoli Soup', 'Soup w/ broc and cheese',
      'https://upload.wikimedia.org/wikipedia/commons/5/50/Broccoli_and_cheese_soup_preparation_2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
