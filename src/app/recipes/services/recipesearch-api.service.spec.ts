import { TestBed } from '@angular/core/testing';

import { RecipesearchApiService } from './recipesearch-api.service';

describe('RecipesearchApiService', () => {
  let service: RecipesearchApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesearchApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
