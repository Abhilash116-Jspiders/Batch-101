import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttributeComponent } from './directives/attribute/attribute.component';
import { StructuralComponent } from './directives/structural/structural.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AttributeComponent, StructuralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives';
}
