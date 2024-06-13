import { Component, EventEmitter , Output,AfterViewInit, OnInit,ViewChild, ElementRef } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { fromEvent,Subscription } from 'rxjs';
import { map, debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { RecipesearchApiService } from '../../services/recipesearch-api.service';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,MatIconModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit,AfterViewInit {
  @ViewChild('searchInput')
  inputSearch?:ElementRef
  @Output() searchQuery = new EventEmitter<string>();
  constructor(){
  }
  ngAfterViewInit() {
      fromEvent<any>(this.inputSearch?.nativeElement,'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      ).subscribe(query => this.searchQuery.emit(query));
  }
  ngOnInit(){}
}
