import { Controller, Get, Param } from '@nestjs/common';

import { Breed } from './breed.model';
import { BreedService } from './breed.service';

@Controller('breed')
export class BreedController {
  constructor(private readonly breedService: BreedService) {}

  @Get()
  getBreeds(): string[] {
    return this.breedService.getAllBreeds();
  }

  @Get(':breedName')
  getBreedDetailsByName(@Param() params: any): Breed {
    return this.breedService.getBreedDetailsByName(params.breedName);
  }
}
