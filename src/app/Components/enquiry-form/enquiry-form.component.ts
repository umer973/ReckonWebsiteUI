import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './enquiry-form.component.html',
  
})
export class EnquiryFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  HelpForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailAddress: new FormControl(''),
    MobileNumber: new FormControl(''),
    description: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.HelpForm.value);
  }
}
