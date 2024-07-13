import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './built-in.component.html',
  styleUrl: './built-in.component.css'
})
export class BuiltInComponent {
  firstName = "John";
  lastName = "Jacobs";
  decimalVal = 2568.1568923;
  marksObtained = 585;
  totalMarks = 600;
  bankBalance = 9002.89;
  todaysDate = Date.now();
  user = {id: 101, name: "John"};
}
