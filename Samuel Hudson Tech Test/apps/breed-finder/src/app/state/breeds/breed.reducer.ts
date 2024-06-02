import { createFeature, createReducer, on } from '@ngrx/store';
import { Breed } from '../../_models';
import {
  getBreedDetailsByName,
  getBreedDetailsByNameFailure,
  getBreedDetailsByNameSuccess,
  getBreedList,
  getBreedListFailure,
  getBreedListSuccess,
} from './breed.actions';
import { BreedState } from './breed.model';

export const initialState: BreedState = {
  breedList: [],
  breedDetails: {} as Breed,
  isLoading: false,
};

export const breedReducer = createFeature({
  name: 'breedState',
  reducer: createReducer(
    initialState,
    on(getBreedList, (state) => {
      return { ...state, isLoading: true };
    }),
    on(getBreedListSuccess, (state, { breeds }) => {
      return {
        ...state,
        breedList: breeds,
        isLoading: false,
      };
    }),
    on(getBreedListFailure, (state) => {
      return {
        ...state,
        isLoading: false,
      };
    }),
    on(getBreedDetailsByName, (state) => {
      return { ...state, isLoading: true };
    }),
    on(getBreedDetailsByNameSuccess, (state, { breedDetails }) => {
      return { ...state, breedDetails: breedDetails, isLoading: false };
    }),
    on(getBreedDetailsByNameFailure, (state) => {
      return { ...state, isLoading: false };
    })
  ),
});
