import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderContentComponent } from './public/components/header-content/header-content.component';
import {RecipeListComponent} from './recipes/components/recipe-list/recipe-list.component';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderContentComponent, FooterContentComponent, RecipeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RecipeSearchApi';
}
