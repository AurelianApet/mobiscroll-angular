import { MbscResource } from '../eventcalendar';
import { MbscSlotData } from '../eventcalendar.types';
import { STBase } from '../shared/schedule-timeline-base';
import { ISTOptions, ISTState } from '../shared/schedule-timeline-base.types';
import * as ɵngcc0 from '@angular/core';
export interface ITimelineOptions extends ISTOptions {
    dayTemplate?: any;
    type: 'week' | 'day' | 'month' | 'year';
    renderSlot?(args: MbscSlotData): any;
}
export interface ITimelineState extends ISTState {
    dayIndex: number;
}
interface IConnectionData {
    color?: string;
    cssClass?: string;
    fill?: string;
    id: string;
    pathD: string;
    startDate: Date;
    endDate: Date;
}
/** @hidden */
export declare class TimelineBase extends STBase<ITimelineOptions, ITimelineState> {
    _isTimeline: boolean;
    _connections: IConnectionData[] | undefined;
    protected _stickyHeader: HTMLElement | null;
    protected _stickyDate: HTMLElement | null;
    protected _stickyMonth: HTMLElement | null;
    protected _stickyWeek: HTMLElement | null;
    _onScroll: () => void;
    _onParentClick(resource: MbscResource): void;
    _setStickyHeader: (el: HTMLElement) => void;
    _setStickyDay: (el: HTMLElement) => void;
    _setStickyMonth: (el: HTMLElement) => void;
    _setStickyWeek: (el: HTMLElement) => void;
    _setCont: (el: HTMLElement) => void;
    _setResCont: (el: HTMLElement) => void;
    _setGridCont: (el: HTMLElement) => void;
    _setHeaderCont: (el: HTMLElement) => void;
    _setCursorTimeCont: (el: HTMLElement) => void;
    protected _render(s: ITimelineOptions, state: ITimelineState): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TimelineBase, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<TimelineBase, "[mbsc-tml-b]", never, {}, {}, never, never, false, never>;
}
export {};

//# sourceMappingURL=timeline.d.ts.map