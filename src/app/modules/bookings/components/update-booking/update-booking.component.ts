import { Component, OnInit } from '@angular/core';

import { Parameters } from 'src/app/modules/shared/models/parameters.model';
import { IdService } from 'src/app/modules/shared/services/ids.service';
import { Booking } from '../../models/booking.model';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.scss']
})
export class UpdateBookingComponent implements OnInit {
  private params: Parameters = { currentId: '' };

  constructor(private bookingsService: BookingsService, private idService: IdService) { }

  ngOnInit(): void {
    this.idService.get(this.params);
    // update
  }

  updateBooking(id: string, entity: Booking): void {
    this.bookingsService.update(id, entity)
      .then(() => console.log('Booking was succesfully updated'))
      .catch(error => console.error('Error updating booking: ', error));
  }

}
