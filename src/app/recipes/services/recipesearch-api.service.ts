import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class RecipesearchApiService {
  private baseUrl = 'https://api.edamam.com'
  constructor(private http:HttpClient) { }

  getRecipes():Observable<any>{
    return this.http.get(`${this.baseUrl}/search?q=pasta&app_id=b180fdc0&app_key=e4590e049f94dbdb76d48f4bbcf9a686`);
  }
}
