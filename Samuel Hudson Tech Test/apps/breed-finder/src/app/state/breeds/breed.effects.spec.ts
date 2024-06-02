import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import {
  getBreedDetailsByName,
  getBreedDetailsByNameFailure,
  getBreedDetailsByNameSuccess,
  getBreedList,
  getBreedListFailure,
  getBreedListSuccess,
} from './breed.actions';
import { BreedEffects } from './breed.effects';
import { BreedService } from './breed.service';

describe('CourseProgressEffects', () => {
  let actions: Observable<unknown>;
  let effects: BreedEffects;
  let service: BreedService;
  let store: MockStore;

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
      providers: [
        BreedEffects,
        provideMockStore(),
        provideMockActions(() => actions),
        {
          provide: BreedService,
          useValue: {
            getBreedList: jest.fn(),
          },
        },
      ],
    });

    service = TestBed.inject(BreedService);
    effects = TestBed.inject(BreedEffects);
    store = TestBed.inject(MockStore);

    jest.spyOn(store, 'dispatch');
  });

  describe('getBreedList$', () => {
    it('should dispatch getBreedListSuccess', () => {
      actions = hot('-a', { a: getBreedList() });

      const serviceResponse = cold('-a', { a: mockBreedList });
      service.getBreedList = jest.fn(() => serviceResponse);

      const expected = cold('--a', {
        a: getBreedListSuccess({ breeds: mockBreedList }),
      });

      expect(effects.getBreedList$).toBeObservable(expected);
      expect(service.getBreedList).toHaveBeenCalled();
    });

    it('should dispatch getBreedListFailure', () => {
      const error = new Error('oops');

      actions = hot('-a', { a: getBreedList() });

      const serviceResponse = cold('-#|', {}, error);
      service.getBreedList = jest.fn(() => serviceResponse);

      const expected = cold('--a', { a: getBreedListFailure({ error }) });

      expect(effects.getBreedList$).toBeObservable(expected);
      expect(service.getBreedList).toHaveBeenCalled();
    });
  });

  describe('getBreedDetailsByName$', () => {
    it('should dispatch getBreedDetailsByNameSuccess', () => {
      actions = hot('-a', { a: getBreedDetailsByName({ breedName: 'dog' }) });

      const serviceResponse = cold('-a', { a: mockBreedDetails });
      service.getBreedDetailsByName = jest.fn(() => serviceResponse);

      const expected = cold('--a', {
        a: getBreedDetailsByNameSuccess({ breedDetails: mockBreedDetails }),
      });

      expect(effects.getBreedDetailsByName$).toBeObservable(expected);
      expect(service.getBreedDetailsByName).toHaveBeenCalled();
    });

    it('should dispatch getBreedDetailsByNameFailure', () => {
      const error = new Error('oops');

      actions = hot('-a', { a: getBreedDetailsByName({ breedName: 'dog' }) });

      const serviceResponse = cold('-#|', {}, error);
      service.getBreedDetailsByName = jest.fn(() => serviceResponse);

      const expected = cold('--a', {
        a: getBreedDetailsByNameFailure({ error }),
      });

      expect(effects.getBreedDetailsByName$).toBeObservable(expected);
      expect(service.getBreedDetailsByName).toHaveBeenCalled();
    });
  });
});
