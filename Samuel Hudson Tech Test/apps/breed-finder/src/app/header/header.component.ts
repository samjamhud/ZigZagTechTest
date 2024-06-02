import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bootstrapArrowRepeat } from '@ng-icons/bootstrap-icons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { BreedFinderBase } from '../_abstract';

@Component({
  standalone: true,
  imports: [CommonModule, AsyncPipe, NgIconComponent],
  providers: [provideIcons({ bootstrapArrowRepeat })],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderPageComponent extends BreedFinderBase {}
