import { MbscCalendarDayData } from '../../../shared/calendar-view/calendar-day';
import { IScheduleTimezone } from '../eventcalendar.types';
import { STBase } from '../shared/schedule-timeline-base';
import { ISTOptions, ISTState } from '../shared/schedule-timeline-base.types';
import * as ɵngcc0 from '@angular/core';
export interface ISchedulerOptions extends ISTOptions {
    groupBy?: 'date' | 'resource';
    timezones?: Array<IScheduleTimezone | string> | undefined;
    type: 'month' | 'week' | 'day';
    renderDayContent?(args: MbscCalendarDayData): any;
    onWeekDayClick(arg: any): void;
}
export interface ISchedulerState extends ISTState {
    showShadow?: boolean;
}
/** @hidden */
export declare class SchedulerBase extends STBase<ISchedulerOptions, ISchedulerState> {
    _largeDayNames: boolean;
    _timeWidth: {
        width: string;
    } | undefined;
    _timezones: IScheduleTimezone[] | undefined;
    protected _allDayCont: HTMLElement | null;
    protected _timeCont: HTMLElement | null;
    _onScroll: () => void;
    _setCont: (el: HTMLElement) => void;
    _setTimeCont: (el: HTMLElement) => void;
    _setAllDayCont: (el: HTMLElement) => void;
    _setGridCont: (el: HTMLElement) => void;
    _setHeaderCont: (el: HTMLElement) => void;
    _setCursorTimeCont: (el: HTMLElement) => void;
    protected _render(s: ISchedulerOptions, state: ISchedulerState): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<SchedulerBase, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<SchedulerBase, "[mbsc-sch-b]", never, {}, {}, never, never, false, never>;
}

//# sourceMappingURL=scheduler.d.ts.map