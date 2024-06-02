import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreedFinderBase } from '../_abstract';
import {
  getBreedDetailsByName,
  getBreedList,
} from '../state/breeds/breed.actions';

@Component({
  standalone: true,
  imports: [AsyncPipe, RouterModule],
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['overview.component.scss'],
})
export class OverviewPageComponent extends BreedFinderBase implements OnInit {
  ngOnInit() {
    this.breedList$.subscribe((breedList: string[]) => {
      if (!breedList.length) this.store.dispatch(getBreedList());
    });
  }

  /**
   * Triggered when the user has interacted with one of the breed buttons.
   * Will navigate to the details page and call the api to retrieve the details
   * @param breedName the name of the breed
   */
  public breedSelected(breedName: string): void {
    this.store.dispatch(
      getBreedDetailsByName({
        breedName: breedName.replace(/\s/g, '').toLowerCase(),
      })
    );
    this.router.navigate(['/details']);
  }
}
