import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DisplayProductsComponent } from './display-products/display-products.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveRegistrationComponent } from './reactive-registration/reactive-registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, DisplayProductsComponent, 
    RegistrationComponent, ReactiveRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reusable-components';
}
