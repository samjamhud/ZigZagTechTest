import { Breed } from '../../_models';

export interface BreedState {
  breedList: string[];
  breedDetails: Breed;
  isLoading: boolean;
}
