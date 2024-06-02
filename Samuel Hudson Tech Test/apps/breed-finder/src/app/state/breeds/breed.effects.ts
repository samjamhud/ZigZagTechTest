import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, of } from 'rxjs';
import {
  getBreedDetailsByName,
  getBreedDetailsByNameFailure,
  getBreedDetailsByNameSuccess,
  getBreedList,
  getBreedListFailure,
  getBreedListSuccess,
} from './breed.actions';
import { BreedService } from './breed.service';

@Injectable()
export class BreedEffects {
  constructor(private actions$: Actions, private breedService: BreedService) {}

  getBreedList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getBreedList),
      concatMap(() => {
        return this.breedService.getBreedList().pipe(
          map((breeds) => getBreedListSuccess({ breeds })),
          catchError((e) => of(getBreedListFailure({ error: e })))
        );
      })
    );
  });

  getBreedDetailsByName$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getBreedDetailsByName),
      concatMap((params: { breedName: string }) => {
        return this.breedService.getBreedDetailsByName(params.breedName).pipe(
          map((breedDetails) => getBreedDetailsByNameSuccess({ breedDetails })),
          catchError((e) => of(getBreedDetailsByNameFailure({ error: e })))
        );
      })
    );
  });
}
