import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  bookingForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // split doctor, customer into groups
    this.bookingForm = this.formBuilder.group({
      doctor: '',
      customer: '',
      date: new Date(),
      hospital: ''
    });
  }

  ngOnInit(): void {

  }
}
