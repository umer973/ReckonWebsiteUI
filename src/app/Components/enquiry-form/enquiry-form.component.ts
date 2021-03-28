import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './enquiry-form.component.html',

})
export class EnquiryFormComponent implements OnInit {

  enquiryForm: FormGroup;
  isSubmitted: false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createFormControls();

  }

  createFormControls() {

    this.enquiryForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      EmailAddress: ['', Validators.required],
      MobileNumber: ['', Validators.required],
      Description: ['', Validators.required]

    });
  }

  get f() { return this.enquiryForm.controls }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.enquiryForm.valid) {
      console.warn(this.enquiryForm.value);
      alert('Enquiry Submitted')
      this.enquiryForm.reset();

    }
  }
}
