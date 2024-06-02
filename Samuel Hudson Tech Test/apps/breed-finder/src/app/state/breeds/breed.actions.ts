import { createAction, props } from '@ngrx/store';
import { Breed } from '../../_models';

export const getBreedList = createAction('[Breed] Get Breed List');

export const getBreedListSuccess = createAction(
  '[Breed] Get Breed List Success',
  props<{ breeds: string[] }>()
);

export const getBreedListFailure = createAction(
  '[Breed] Get Breed List Failure',
  props<{ error: Error }>()
);

export const getBreedDetailsByName = createAction(
  '[Breed] Get Breed Details By Name',
  props<{ breedName: string }>()
);

export const getBreedDetailsByNameSuccess = createAction(
  '[Breed] Get Breed Details By Name Success',
  props<{ breedDetails: Breed }>()
);

export const getBreedDetailsByNameFailure = createAction(
  '[Breed] Get Breed Details By Name Failure',
  props<{ error: Error }>()
);
