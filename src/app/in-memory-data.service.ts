import { Injectable } from '@angular/core';
import { User } from './users';

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

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 1;
  }
  constructor() { }
}
