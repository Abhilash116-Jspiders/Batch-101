import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-registration',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './reactive-registration.component.html',
  styleUrl: './reactive-registration.component.css'
})
export class ReactiveRegistrationComponent {
  registrationForm: any;
  constructor(formBuilder: FormBuilder) {
    this.registrationForm = formBuilder.group({
      "fullName": formBuilder.group({
        "firstName": formBuilder.control("", [Validators.required]),
        "lastName": formBuilder.control("")
      }),
      "email": formBuilder.control("", [Validators.required, Validators.email]),
      "password": formBuilder.control("")
    })
  }

  submit() {
    console.log(this.registrationForm.value);
  }
}
