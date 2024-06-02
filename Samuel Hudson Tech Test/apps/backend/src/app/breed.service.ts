import { Injectable } from '@nestjs/common';
import breedList from '../assets/breed-list.json';
import { Breed } from './breed.model';

@Injectable()
export class BreedService {
  getAllBreeds(): string[] {
    const breedInfos: Breed[] = JSON.parse(JSON.stringify(breedList));
    return breedInfos.map((breedInfo) => breedInfo.name);
  }

  getBreedDetailsByName(breedName: string): Breed {
    return Array.from(JSON.parse(JSON.stringify(breedList))).find(
      (breed: Breed) =>
        breed.name.replace(/\s/g, '').toLowerCase() === breedName
    ) as Breed;
  }
}
