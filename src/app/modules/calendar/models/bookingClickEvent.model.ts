import { CalendarEvent } from "angular-calendar";

export interface BookingClickEvent {
  event: CalendarEvent;
  sourceEvent: any;
}
