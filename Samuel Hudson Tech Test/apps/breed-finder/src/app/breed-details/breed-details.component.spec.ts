import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { BreedDetailsComponent } from './breed-details.component';

describe('BreedDetailsComponent', () => {
  let component: BreedDetailsComponent;
  let fixture: ComponentFixture<BreedDetailsComponent>;

  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BreedDetailsComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(BreedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('navigateBack', () => {
    it('should navigate back to the overview screen using the router', () => {
      const routerSpy = jest
        .spyOn(component['router'], 'navigate')
        .mockImplementation();

      component.navigateBack();

      expect(routerSpy).toHaveBeenCalled();
    });
  });
});
