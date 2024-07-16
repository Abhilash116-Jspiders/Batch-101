import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [NgClass, NgStyle, FormsModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {
  isSuccess = false;
  applyRed = false;
  searchVal = "Enter here..."
}
