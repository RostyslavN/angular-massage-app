import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CalendarTemplateComponent } from './components/calendar-template/calendar-template.component';

@NgModule({
  declarations: [
    CalendarTemplateComponent
  ],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FontAwesomeModule
  ],
  exports: [ CalendarTemplateComponent ]
})
export class CustomCalendarModule { }
