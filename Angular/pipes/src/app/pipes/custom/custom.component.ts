import { Component } from '@angular/core';
import { GreetPipe } from '../../greet.pipe';
import { IsActivePipe } from '../../is-active.pipe';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [GreetPipe, IsActivePipe],
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.css'
})
export class CustomComponent {
  name = "Abhilash";
  users = [{id: 101, name: "Denis", isActive: true}, 
    {id: 102, name: "Simon", isActive: false}]

  updateUser() {
    this.users[1].isActive = true;
  }
}
