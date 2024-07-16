import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  currentUser: any;
  @Output()
  changeActiveStatus: EventEmitter<any> = new EventEmitter();

  updateActiveStatus() {
    this.changeActiveStatus.emit(this.currentUser.id);
  }
}
