import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // view: CalendarView = CalendarView.Week;
  // viewDate: Date = new Date();
  @Input() view: CalendarView = CalendarView['Week'];
  @Input() viewDate: Date = new Date();
  @Output() viewChange: EventEmitter<CalendarView> = new EventEmitter<CalendarView>();
  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter<Date>();
  calendarView: typeof CalendarView = CalendarView;

  constructor() { }

  ngOnInit(): void {
  }

}
