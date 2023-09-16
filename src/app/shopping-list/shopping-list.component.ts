import { Component } from '@angular/core';
import {IngredientModel} from "../shared/data/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  ingredients:IngredientModel[]=[
    new IngredientModel('گوجه',3),
    new IngredientModel('خیارشور',5),
    new IngredientModel('زیتون',10),
  ];
}
