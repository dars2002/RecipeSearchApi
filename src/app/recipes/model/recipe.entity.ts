export class Recipe {
  id: number;
  label: string;
  image: string;
  calories: number;
  ingredientLines: string[];
  constructor() {
    this.id = 0;
    this.label = '';
    this.image = '';
    this.calories = 0;
    this.ingredientLines = [];
  }
}
