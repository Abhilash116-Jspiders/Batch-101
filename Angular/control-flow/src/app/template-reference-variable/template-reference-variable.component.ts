import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  standalone: true,
  imports: [],
  templateUrl: './template-reference-variable.component.html',
  styleUrl: './template-reference-variable.component.css'
})
export class TemplateReferenceVariableComponent {
  recivePhoneNum(phone: HTMLInputElement) {
    alert("Making a call to the phone number "+phone.value)
  }
}
