import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule as MwlCalendar, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { WeekViewComponent } from './components/week-view/week-view.component';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';

@NgModule({
  declarations: [
    WeekViewComponent,
    CalendarHeaderComponent
  ],
  imports: [
    CommonModule,
    MwlCalendar.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [
    CalendarHeaderComponent,
    WeekViewComponent
  ]
})
export class CalendarModule { }
