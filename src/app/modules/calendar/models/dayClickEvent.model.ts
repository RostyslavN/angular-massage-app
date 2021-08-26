import { WeekDay } from 'calendar-utils';

export interface DayClickEvent {
  day: WeekDay;
  sourceEvent: MouseEvent;
}
