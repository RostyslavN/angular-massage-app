import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule as MwlCalendar, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HeaderComponent } from './components/header/header.component';
import { WeekViewComponent } from './components/week-view/week-view.component';

@NgModule({
  declarations: [
    HeaderComponent,
    WeekViewComponent
  ],
  imports: [
    CommonModule,
    MwlCalendar.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [WeekViewComponent]
})
export class CalendarModule { }
