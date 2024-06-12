import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Recipe } from '../../model/recipe.entity';
import { RecipesearchApiService } from '../../services/recipesearch-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatFormFieldModule,CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Array<Recipe> = [];
  displayedColumns: string[] = ['label','calories','image','ingredientLines'];
  dataSource: any;

  constructor(private recipesearchApiService: RecipesearchApiService) {
  }
  applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
      this.recipesearchApiService.getRecipes().subscribe((data: any) => {
        this.recipes = data.hits.map((hit: any) => {
                let recipe = hit.recipe;
                recipe.calories = Math.round(recipe.calories); // Redondea las calorías a enteros
                return recipe;
              });
        this.dataSource = new MatTableDataSource(this.recipes);
      });
  }
}
