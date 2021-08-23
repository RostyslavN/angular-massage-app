import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar-template',
  templateUrl: './calendar-template.component.html',
  styleUrls: ['./calendar-template.component.scss']
})
export class CalendarTemplateComponent implements OnInit, OnChanges {
  @Input() events: CalendarEvent[] = [];
  @Output() viewChange: EventEmitter<CalendarView> = new EventEmitter<CalendarView>();
  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter<Date>();

  faTrashIcon: IconDefinition = faTrashAlt;

  calendarView: typeof CalendarView = CalendarView;
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();


  constructor() {
  }

  ngOnInit(): void {
    // this.events = this.eventsData;
    // console.log(this.events)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.events) {
      console.log(this.events)
    }

  }
}
