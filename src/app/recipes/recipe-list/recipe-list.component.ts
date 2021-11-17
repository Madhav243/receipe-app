import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A test Recipe','This is simply a test','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('A test2 Recipe','This is simply a test2','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe> ();

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
