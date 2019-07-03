import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const users = [
      {
        id: 1,
        firstName: 'Olamijin',
        lastName: 'Adebayo',
      },
      {
        id: 2,
        firstName: 'isaac',
        lastName: 'Adebayo',
      },
      {
        id: 3,
        firstName: 'ronaldo',
        lastName: 'Adebayo',
      },
    ]
    return  {users};
  }
  constructor() { }
}
