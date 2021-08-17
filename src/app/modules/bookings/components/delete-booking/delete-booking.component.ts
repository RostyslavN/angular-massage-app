import { Component, OnInit } from '@angular/core';

import { Parameters } from 'src/app/modules/shared/models/parameters.model';
import { IdService } from 'src/app/modules/shared/services/ids.service';
import { BookingsService } from '../../services/bookings.service';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.scss']
})
export class DeleteBookingComponent implements OnInit {
  private params: Parameters = { currentId: '' };

  constructor(private bookingsService: BookingsService, private idService: IdService) { }

  ngOnInit(): void {
    this.idService.get(this.params);
    this.deleteBooking(this.params.currentId);
  }

  deleteBooking(id: string): void {
    this.bookingsService.delete(id)
      .then(() => console.log('Booking successfully deleted'))
      .catch(error => console.error('Error deleting booking: ', error));
  }
}
