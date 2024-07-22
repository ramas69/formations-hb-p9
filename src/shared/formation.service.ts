import { Injectable } from '@angular/core';
import { mockFormation } from './mock';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor() { }

  fetchAll(){
    return mockFormation ;
  }
}
