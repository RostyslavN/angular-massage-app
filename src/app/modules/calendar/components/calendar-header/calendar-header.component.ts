import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss']
})
export class CalendarHeaderComponent implements OnInit {
  @Input() view: CalendarView;
  @Input() viewDate: Date;
  @Output() viewChange: EventEmitter<CalendarView> = new EventEmitter<CalendarView>();
  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter<Date>();
  calendarView: typeof CalendarView = CalendarView;

  constructor() { }

  ngOnInit(): void {
  }
}
