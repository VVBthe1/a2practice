import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 'First Test Recipe', 'http://www.ohtastensee.com/wp-content/uploads/2010/05/img_4971.jpg'),
    new Recipe('Test Recipe 2', 'Just Another Test Recipe', 'https://turmerickitchen.files.wordpress.com/2015/08/schezwan-chicken-frankie-a-treat-for-spicy-street-food-lovers-recipe-1024x1024-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
