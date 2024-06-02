import { Directive, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Breed } from '../_models';
import { breedReducer } from '../state/breeds/breed.reducer';

@Directive()
export abstract class BreedFinderBase {
  protected store = inject(Store);
  protected router = inject(Router);

  isLoading$: Observable<boolean> = this.store.select(
    breedReducer.selectIsLoading
  );

  breedList$: Observable<string[]> = this.store.select(
    breedReducer.selectBreedList
  );

  breedDetails$: Observable<Breed> = this.store.select(
    breedReducer.selectBreedDetails
  );
}
