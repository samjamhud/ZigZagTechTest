import { Route } from '@angular/router';
import { BreedDetailsComponent } from './breed-details/breed-details.component';
import { OverviewPageComponent } from './overview/overview.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: OverviewPageComponent,
  },
  {
    path: 'details',
    component: BreedDetailsComponent,
  },
];
