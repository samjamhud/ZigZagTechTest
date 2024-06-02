import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { bootstrapArrow90degLeft } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { BreedFinderBase } from '../_abstract';
import { Breed } from '../_models';

@Component({
  selector: 'app-breed-details',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  providers: [provideIcons({ bootstrapArrow90degLeft })],
  templateUrl: './breed-details.component.html',
  styleUrl: './breed-details.component.scss',
})
export class BreedDetailsComponent extends BreedFinderBase implements OnInit {
  public breedDetails: Breed | null = null;

  ngOnInit(): void {
    this.breedDetails$.subscribe((breedDetails: Breed) => {
      this.breedDetails = breedDetails;
    });
  }

  /**
   * Handle user interaction from the back icon and navigate back to the breed list
   */
  public navigateBack(): void {
    this.router.navigate(['../']);
  }
}
