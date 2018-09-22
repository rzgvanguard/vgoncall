import { CalendarEvent } from 'calendar-utils';

export class CalendarEventImpl implements CalendarEvent {
    id?: string | number;
    start: Date;
    end?: Date;
    title: string;
    // color?: EventColor;
    // actions?: EventAction[];
    allDay?: boolean;
    cssClass?: string;
    resizable?: { beforeStart?: boolean; afterEnd?: boolean; };
    draggable?: boolean;
    meta?: any;
}
