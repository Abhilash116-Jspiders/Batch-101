import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuiltInComponent } from './pipes/built-in/built-in.component';
import { CustomComponent } from './pipes/custom/custom.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuiltInComponent, CustomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipes';
}
