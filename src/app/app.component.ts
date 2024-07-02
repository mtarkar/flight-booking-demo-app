import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight-booking-demo-app';


    locations = [
      'New York',
      'Mumbai',
      'Chennai',
      'Kolkata',
      'New Delhi'
    ]


  errors = {
    name: 'Name is Required',
    email: 'Email is Required',
    to: 'Date is Required',
    from: 'Date is Required'
  }



  form = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    to: new FormControl(null, [Validators.required]),
    from: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),

  })

  get name() {
    return this.form.get('name')
  }
  get email() {
    return this.form.get('email')
  }
  get to() {
    return this.form.get('to')
  }
  get from() {
    return this.form.get('from')
  }
  get date() {
    return this.form.get('date')
  }

  submitData() {
    console.log(
      this.form.value
    )
  }





}
