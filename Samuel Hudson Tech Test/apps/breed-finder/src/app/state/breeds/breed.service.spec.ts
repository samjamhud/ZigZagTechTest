import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { BreedService } from './breed.service';

describe('BreedService', () => {
  let service: BreedService;
  let httpClient: HttpClient;

  const mockBreedList = ['Pomeranian', 'Poodle'];
  const mockBreedDetails = {
    name: '',
    description: '',
    size: '',
    origin: '',
    lifeExpectancy: '',
    temperament: [],
    image: '',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BreedService],
    });

    service = TestBed.inject(BreedService);
    httpClient = TestBed.inject(HttpClient);
  });

  describe('getBreedList', () => {
    it('should call http get to return list of breed names', () => {
      httpClient.get = jest.fn().mockReturnValue(mockBreedList);

      expect(service.getBreedList()).toEqual(mockBreedList);
      expect(httpClient.get).toHaveBeenCalledWith(
        'http://localhost:3000/api/breed'
      );
    });
  });

  describe('getBreedDetailsByName', () => {
    it('should call http get to return breed details', () => {
      httpClient.get = jest.fn().mockReturnValue(mockBreedDetails);

      expect(service.getBreedDetailsByName('dog')).toEqual(mockBreedDetails);
      expect(httpClient.get).toHaveBeenCalledWith(
        'http://localhost:3000/api/breed/dog'
      );
    });
  });
});
