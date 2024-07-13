import { Component } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './text-interpolation.component.html',
  styleUrl: './text-interpolation.component.css'
})
export class TextInterpolationComponent {
  productId = 102244;
  productName = "One Plus Buds";
  productImageURL = "url";
}
