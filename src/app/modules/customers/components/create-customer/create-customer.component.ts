import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { CustomersService } from '../../services/customers.service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {
  customerForm: FormGroup;
  faTimesIcon: IconDefinition = faTimes;

  constructor(
    private customerService: CustomersService,
    private formBuilder: FormBuilder,
    private location: Location
  ) {
    this.customerForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      phoneNumber: ['', [
        Validators.required,
        Validators.pattern('\\d{3}-\\d{3}(-\\d{2}){2}')
      ]],
      illnessHistory: ['', Validators.required],
      diagnosis: ['', Validators.required],
      doctorId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  createCustomer(): void {
    if (this.customerForm.invalid) return;
    this.customerService.create(Object.assign({ isClient: true }, this.customerForm.value));
  }

  closeModal(): void {
    // this.location.back()
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
