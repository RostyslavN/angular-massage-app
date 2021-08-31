import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

import { Doctor } from 'src/app/modules/doctors/models/doctor.model';
import { DoctorsService } from 'src/app/modules/doctors/services/doctors.service';
import { Customer } from '../../classes/customer.class';
import { CustomersService } from '../../services/customers.service';
import { CreateCustomerComponent } from '../create-customer/create-customer.component';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  @Output() submitted: EventEmitter<Customer> = new EventEmitter<Customer>();

  readonly doctors$: Observable<Doctor[]> = this.doctorsService.getAll();

  customerForm: FormGroup;
  faTimesIcon: IconDefinition = faTimes;

  constructor(
    private customerService: CustomersService,
    private doctorsService: DoctorsService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public customer: Customer
  ) {
    this.initForm(this.customer);
  }

  ngOnInit(): void {
  }

  initForm(customer = new Customer()): void {
    this.customerForm = this.customerForm = this.formBuilder.group({
      fullName: [
        customer.fullName,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],
      age: [
        customer.age,
        [
          Validators.required,
          Validators.min(1),
          Validators.max(99)
        ]
      ],
      phoneNumber: [
        customer.phoneNumber,
        [
          Validators.required,
          Validators.pattern('\\d{3}-\\d{3}(-\\d{2}){2}')
        ]
      ],
      illnessHistory: [ customer.illnessHistory, Validators.required ],
      diagnosis: [ customer.diagnosis, Validators.required ],
      doctorId: [ customer.doctorId, Validators.required ]
    });
  }

  submitForm(): void {
    if (this.customerForm.invalid) return console.error('Invalid form');
    this.submitted.emit(this.customerForm.value);
    this.customerForm.reset();
  }

  closeModal(): void {
    this.dialogRef.close()
  }

  get submitTitle(): string {
    return this.customer.id ? 'Edit' : 'Add';
  }

  get fullName(): AbstractControl | null {
    return this.customerForm.get('fullName');
  }
  get age(): AbstractControl | null {
    return this.customerForm.get('age');
  }
  get phoneNumber(): AbstractControl | null {
    return this.customerForm.get('phoneNumber');
  }
  get illnessHistory(): AbstractControl | null {
    return this.customerForm.get('illnessHistory');
  }
  get diagnosis(): AbstractControl | null {
    return this.customerForm.get('fulldiagnosisName');
  }
  get doctorId(): AbstractControl | null {
    return this.customerForm.get('doctorId');
  }
}
