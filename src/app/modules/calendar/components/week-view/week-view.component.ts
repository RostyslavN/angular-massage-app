import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';

import { DayClickEvent } from '../../models/dayClickEvent.model';
import { TimeClickEvent } from '../../models/timeClickEvent.model';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss']
})
export class WeekViewComponent implements OnInit {
  @Input() events: CalendarEvent[] = [];
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
  refresh: Subject<any> = new Subject();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openModalWithDay(event: DayClickEvent) {
    this.router.navigate([`/bookings/create/${event.day.date}`]);
  }

  openModalWithDate(event: TimeClickEvent) {
    this.router.navigate([`/bookings/create`], {queryParams: {date: new Date(event.date).toUTCString()}});
  }

  openMenu({ event }: { event: CalendarEvent }) {
    // n
  }
}
