import { Component } from '@angular/core';
import {RecipeModel} from "../data/recipe.model";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent {
  recipes:RecipeModel[]=[
    new RecipeModel('رسپی 1','توضیحات','assets/recipe-images/burger.png'),
    new RecipeModel('رسپی 2','توضیحات','assets/recipe-images/pizza.png'),
    new RecipeModel('رسپی 3','توضیحات','assets/recipe-images/salad.png'),
  ];
}
