import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed } from '../../_models';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  constructor(private http: HttpClient) {}

  public getBreedList(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:3000/api/breed');
  }

  public getBreedDetailsByName(breedName: string): Observable<Breed> {
    return this.http.get<Breed>(`http://localhost:3000/api/breed/${breedName}`);
  }
}
