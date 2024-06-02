import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { OverviewPageComponent } from './overview.component';

describe('OverviewPageComponent', () => {
  let component: OverviewPageComponent;
  let fixture: ComponentFixture<OverviewPageComponent>;

  const initialState = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OverviewPageComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(OverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('breedSelected', () => {
    it('should dispatch a call to the api through the store to retrieve breed details and use the router to navigate to the details page', () => {
      const routerSpy = jest
        .spyOn(component['router'], 'navigate')
        .mockImplementation();

      const storeSpy = jest
        .spyOn(component['store'], 'dispatch')
        .mockImplementation();

      component.breedSelected('dog');

      expect(routerSpy).toHaveBeenCalledWith(['/details']);
      expect(storeSpy).toHaveBeenCalled();
    });
  });
});
