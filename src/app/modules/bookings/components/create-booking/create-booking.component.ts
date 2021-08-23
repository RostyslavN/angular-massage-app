import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
  bookingForm: FormGroup;
  faTimesIcon: IconDefinition = faTimes;

  constructor(
    private bookingsService: BookingsService,
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router
  ) {
    this.bookingForm = this.formBuilder.group({
      bookingName: ['', Validators.required],
      customerId: ['', Validators.required],
      doctorId: ['', Validators.required],
      appointment: this.formBuilder.group({
        date: ['', Validators.required],
        time: ['', [
          Validators.required,
          Validators.min(8),
          Validators.max(19)
        ]]
      }),
      description: ''
    });
  }

  ngOnInit(): void {
  }

  createBooking(): void {
    if (this.bookingForm.invalid) return;
    this.bookingsService.create({
      name: this.bookingName?.value,
      customer: this.customerId?.value,
      doctor: this.doctorId?.value,
      time: new Date(`${this.bookingDate?.value} ${this.bookingTime?.value}`),
      description: this.description?.value
    })
      .then(docRef => {
        console.log(`Booking was succesfully created ${docRef.id}`);
        this.bookingForm.reset();
        this.router.navigate(['/bookings/schedule']);
      })
      .catch(error => console.error('Error creating booking: ', error));
  }

  closeModal(): void {
    this.location.back();
  }

  get bookingName(): AbstractControl | null {
    return this.bookingForm.get('bookingName');
  }
  get customerId(): AbstractControl | null {
    return this.bookingForm.get('customerId');
  }
  get doctorId(): AbstractControl | null {
    return this.bookingForm.get('doctorId');
  }
  get bookingDate(): AbstractControl | null | undefined {
    return this.bookingForm.get('appointment')?.get('date');
  }
  get bookingTime(): AbstractControl | null | undefined {
    return this.bookingForm.get('appointment')?.get('time');
  }
  get hospital(): AbstractControl | null {
    return this.bookingForm.get('hospital');
  }
  get description(): AbstractControl | null {
    return this.bookingForm.get('description');
  }
}
