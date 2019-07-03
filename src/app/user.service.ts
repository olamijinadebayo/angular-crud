import { Injectable } from '@angular/core';
import { User} from './users';
import { Observable, of } from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

// const users = [
//     {
//       id: 1,
//       firstName:'Olamijin',
//       lastName:'Adebayo',
//     },
//     {
//       id: 2,
//       firstName:'isaac',
//       lastName:'Adebayo',
//     },
//     {
//       id: 3,
//       firstName:'ronaldo',
//       lastName:'Adebayo',
//     },
// ]

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  private usersUrl = 'api/users';


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, `Operation: ${operation}`);

      return of(result as T);
    }
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    .pipe(
      tap(users => console.log('Fetched users!')),
      catchError(this.handleError('getUsers', []))
    );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;

    return this.http.get<User>(url).pipe(
      tap(user => console.log(`Fetched product of id ${id}!`, user)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }
  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions).pipe(
      tap(_ => console.log(`Updated user of id ${user.id}!`)),
      catchError(this.handleError<any>('updateUser'))
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
      tap((user: User) => console.log(`Added user with id ${user.id}!`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  deleteUser(userId: number): Observable<User> {
    const url = `${this.usersUrl}/${userId}`;

    return this.http.delete<User>(url, httpOptions).pipe(
      tap(_ => console.log(`Deleted user of id ${userId}!`)),
      catchError(this.handleError<User>('deleteUser'))
    );
  }

}
