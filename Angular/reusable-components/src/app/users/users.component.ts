import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = [
    {id: 101, name: "Praveen", isActive: true},
    {id: 102, name: "Dinesh", isActive: true}
  ]
  changeActiveStatus(id: any) {
    this.users.forEach(user => {
      if(user.id === id) {
        user.isActive = !user.isActive;
      }
    })
  }
}
