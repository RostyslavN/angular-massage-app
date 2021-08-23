import { WeekView, WeekDay } from 'calendar-utils';

export interface CalendarWeekViewBeforeRenderEvent extends WeekView {
  header: WeekDay[];
}
