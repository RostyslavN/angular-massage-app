import { formatDate } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { Customer } from 'src/app/modules/customers/classes/customer.class';
import { CustomersService } from 'src/app/modules/customers/services/customers.service';
import { Doctor } from 'src/app/modules/doctors/models/doctor.model';
import { DoctorsService } from 'src/app/modules/doctors/services/doctors.service';
import { Booking } from '../../classes/booking.class';
import { CreateBookingComponent } from '../create-booking/create-booking.component';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  @Input() booking: Booking;
  @Output() submitted: EventEmitter<Booking> = new EventEmitter<Booking>();
  @Output() delete = new EventEmitter();

  bookingForm: FormGroup;
  faTimesIcon: IconDefinition = faTimes;
  // currentDate: string = new Date().toISOString().split('T')[0];
  readonly customers$: Observable<Customer[]> = this.customersService.getAll();
  readonly doctors$: Observable<Doctor[]> = this.doctorsService.getAll();

  constructor(
    private customersService: CustomersService,
    private doctorsService: DoctorsService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateBookingComponent>,
  ) {
  }

  ngOnInit(): void {
    this.initForm(this.booking);
    // this.currentDate = new Date().toISOString().split('T')[0];
  }

  initForm(booking = new Booking()): void {
    this.bookingForm = this.formBuilder.group({
      name: [ booking.name, Validators.required ],
      customerId: [ booking.customerId, Validators.required ],
      doctorId: [ booking.doctorId, Validators.required ],
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

  submitForm(): void {
    if (this.bookingForm.invalid) return console.error('Ivalid form');
    this.submitted.emit({
      name: this.name?.value,
      customerId: this.customerId?.value,
      doctorId: this.doctorId?.value,
      time: new Date(`${this.bookingDate?.value} ${this.bookingTime?.value}`),
      description: this.description?.value
    });
    this.bookingForm.reset();
  }

  deleteBooking(): void {
    this.delete.emit();
  }

  closeModal(): void {
    this.dialogRef.close(false);
  }

  get submitTitle(): string {
    return this.booking.id ? 'Edit' : 'Create';
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
  get bookingDate(): AbstractControl | null {
    return this.bookingForm.get('appointment.date');
  }
  get bookingTime(): AbstractControl | null {
    return this.bookingForm.get('appointment.time');
  }
  get hospital(): AbstractControl | null {
    return this.bookingForm.get('hospital');
  }
  get description(): AbstractControl | null {
    return this.bookingForm.get('description');
  }
}
