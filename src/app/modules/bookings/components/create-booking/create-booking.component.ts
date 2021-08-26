import { Component, Input, OnInit } from '@angular/core';
import { formatDate, Location } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { BookingsService } from '../../services/bookings.service';
import { CustomersService } from 'src/app/modules/customers/services/customers.service';
import { DoctorsService } from 'src/app/modules/doctors/services/doctors.service';
import { Booking } from '../../models/booking.model';
import { Customer } from 'src/app/modules/customers/models/customer.model';
import { Doctor } from 'src/app/modules/doctors/models/doctor.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {
  bookingForm: FormGroup;
  faTimesIcon: IconDefinition = faTimes;
  // currentDate: string = new Date().toISOString().split('T')[0];
  readonly customers$: Observable<Customer[]> = this.customersService.getAll();
  readonly doctors$: Observable<Doctor[]> = this.doctorsService.getAll();

  constructor(
    private bookingsService: BookingsService,
    private formBuilder: FormBuilder,
    private location: Location,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private customersService: CustomersService,
    private doctorsService: DoctorsService
  ) {
    // this.initForm();
   this.subscribeOnQueryParamsChange();

  }

  ngOnInit(): void {
    // this.currentDate = new Date().toISOString().split('T')[0];
    // this.bookingDate?.markAsDirty();
    // this.bookingTime?.markAsDirty();

  }

  subscribeOnQueryParamsChange() {
    this.activedRoute.queryParams.subscribe(queryParams => this.initForm(new Booking({ time: queryParams.date})))
  }

  initForm(booking = new Booking()): void {
    this.bookingForm = this.formBuilder.group({
      name: [booking.name, Validators.required],
      customerId: [booking.customerId, Validators.required],
      doctorId: [booking.doctorId, Validators.required],
      appointment: this.formBuilder.group({
        date: [
          formatDate(booking.time, 'yyyy-MM-dd', 'en'),
          Validators.required
        ],
        time: [
          formatDate(booking.time, 'HH:mm', 'en'),
          [
            Validators.required,
            Validators.min(8),
            Validators.max(19)
          ]
        ]
      }),
      description: booking.description
    });
  }

  createBooking(): void {
    if (this.bookingForm.invalid) {
      return console.error('Invalid form');
    }
    this.bookingsService.create({
      name: this.name?.value,
      customerId: this.customerId?.value,
      doctorId: this.doctorId?.value,
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
    // this.location.back();
  }

  get name(): AbstractControl | null {
    return this.bookingForm.get('name');
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
