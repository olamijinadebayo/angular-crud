import { Component, OnInit } from '@angular/core';
import {User} from '../users';
import { UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  submitted = false;
    onSubmit() { this.submitted = true; }
  
  constructor(private userService:UserService) { }

  selectedUser:User;

  onSelectUser(user:User){
    this.selectedUser = user;
    this.userService.getUser(2)
      .subscribe(user=> console.log(user));
  }
  ngOnInit() {
    this.getUsers();
  }
  getUsers():void {
    const users = this.userService.getUsers()
      .subscribe(users=>this.users = users);
  }

  save(user): void {
    this.userService.updateUser(user)
      .subscribe(() => console.log('Product saved!!'));
  }

  add(firstName: string, lastName:string): void {
    this.userService.addUser({ firstName,lastName } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);

    this.userService.deleteUser(userId).subscribe();
  }
}
