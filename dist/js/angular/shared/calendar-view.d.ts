import { ElementRef, TemplateRef } from '@angular/core';
import { MbscCalendarNavService } from '../../core/shared/calendar-nav/calendar-nav';
import { CalendarViewBase } from '../../core/shared/calendar-view/calendar-view';
import { MbscCalendarEvent, MbscCalendarLabel, MbscResource, ViewType } from '../../core/shared/calendar-view/calendar-view.types';
import { InstanceServiceBase } from '../../core/shared/instance-service';
import { DateType, ITimezonePlugin } from '../../core/util/datetime';
import { noop } from '../../core/util/misc';
/** @hidden */
import * as ɵngcc0 from '@angular/core';
export declare class MbscCalendarView extends CalendarViewBase {
    vBody: ElementRef;
    vPickerCont: ElementRef;
    activeDate: number;
    cssClass: string;
    clickToCreate: boolean | 'double' | 'single';
    colors: {};
    dataTimezone: string;
    dayTemplate: TemplateRef<any>;
    dayContentTemplate: TemplateRef<any>;
    displayTimezone: string;
    dragToCreate: boolean;
    dragToResize: boolean;
    dragToMove: boolean;
    endDay: number;
    eventOrder: (event1: MbscCalendarLabel, event2: MbscCalendarLabel) => number;
    eventRange: 'year' | 'month' | 'week' | 'day';
    eventRangeSize: number;
    exclusiveEndDates: boolean;
    fromText: string;
    hasContent: boolean;
    hasPicker: boolean;
    headerTemplate: TemplateRef<any>;
    height: number | string;
    hoverEnd: number;
    hoverStart: number;
    invalid: {};
    instanceService: InstanceServiceBase;
    isPicker: boolean;
    labels: {};
    labelsMap: {
        [key: string]: MbscCalendarEvent[];
    };
    labelTemplate: TemplateRef<any>;
    labelContentTemplate: TemplateRef<any>;
    dragData?: {
        [key: number]: any[];
    };
    max: DateType;
    marked: {};
    marksMap: {
        [key: string]: MbscCalendarEvent[];
    };
    min: DateType;
    mouseSwipe: boolean;
    mousewheel: boolean;
    navigationService: MbscCalendarNavService;
    noOuterChange: boolean;
    downIcon: string;
    nextIconH: string;
    nextIconV: string;
    nextPageText: string;
    prevIconH: string;
    prevIconV: string;
    prevPageText: string;
    upIcon: string;
    pages: number | 'auto';
    pageLoad: number;
    refDate: DateType;
    resourcesMap?: {
        [key: number]: MbscResource;
    };
    rangeEnd: number;
    rangeStart: number;
    responsiveStyle: boolean;
    selectedDates: any;
    selectedEventsMap: {
        [key: number]: MbscCalendarEvent;
    };
    selectView?: ViewType;
    showCalendar: boolean;
    showControls: boolean;
    showEventTooltip: boolean;
    showLabelCount: boolean;
    showOuterDays: boolean;
    showSchedule: boolean;
    showToday: boolean;
    showWeekNumbers: boolean;
    size: number;
    startDay: number;
    swipe: boolean;
    labelList: 'all' | boolean | number;
    timeFormat: string;
    timezonePlugin: ITimezonePlugin;
    update: number;
    valid: {};
    weeks: number;
    width: number | string;
    calendarScroll: 'horizontal' | 'vertical';
    calendarType: 'year' | 'month' | 'week';
    getDate: (y: number, m: number, d: number) => Date;
    getDay: (d: Date) => number;
    getMaxDayOfMonth: (y: number, m: number) => number;
    getMonth: (d: Date) => number;
    getWeekNumber: (d: Date) => number;
    getYear: (d: Date) => number;
    amText: string;
    dateFormat: string;
    dayNames: string[];
    dayNamesMin: string[];
    dayNamesShort: string[];
    eventText: string;
    eventsText: string;
    firstDay: number;
    monthNames: string[];
    monthNamesShort: string[];
    moreEventsPluralText: string;
    moreEventsText: string;
    pmText: string;
    todayText: string;
    toText: string;
    weekText: string;
    yearSuffix: string;
    onActiveChange: (args: any) => void;
    onCellHoverIn: (args: any) => void;
    onCellHoverOut: (args: any) => void;
    onDayClick: (args: any) => void;
    onDayDoubleClick: (args: any) => void;
    onDayRightClick: (args: any) => void;
    onDayHoverIn: (args: any) => void;
    onDayHoverOut: (args: any) => void;
    onGestureStart: (args: any) => void;
    onLabelClick: (args: any) => void;
    onLabelDoubleClick: (args: any) => void;
    onLabelRightClick: (args: any) => void;
    onLabelHoverIn: (args: any) => void;
    onLabelHoverOut: (args: any) => void;
    onLabelDelete: (args: any) => void;
    onLabelUpdateStart: (args: any) => void;
    onLabelUpdateMove: (args: any) => void;
    onLabelUpdateEnd: (args: any) => void;
    onLabelUpdateModeOn: (args: any) => void;
    onLabelUpdateModeOff: (args: any) => void;
    onPageChange: (args: any) => void;
    onPageLoaded: (args: any) => void;
    onPageLoading: (args: any) => void;
    onResize: (args: any) => void;
    onTodayClick: () => void;
    _noop: typeof noop;
    _getFirstDay(): number;
    _getMonthName(item: number): string;
    protected _mounted(): void;
    protected _updated(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<MbscCalendarView, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<MbscCalendarView, "mbsc-calendar-view", never, { "activeDate": "activeDate"; "cssClass": "cssClass"; "clickToCreate": "clickToCreate"; "colors": "colors"; "dataTimezone": "dataTimezone"; "dayTemplate": "dayTemplate"; "dayContentTemplate": "dayContentTemplate"; "displayTimezone": "displayTimezone"; "dragToCreate": "dragToCreate"; "dragToResize": "dragToResize"; "dragToMove": "dragToMove"; "endDay": "endDay"; "eventOrder": "eventOrder"; "eventRange": "eventRange"; "eventRangeSize": "eventRangeSize"; "exclusiveEndDates": "exclusiveEndDates"; "fromText": "fromText"; "hasContent": "hasContent"; "hasPicker": "hasPicker"; "headerTemplate": "headerTemplate"; "height": "height"; "hoverEnd": "hoverEnd"; "hoverStart": "hoverStart"; "invalid": "invalid"; "instanceService": "instanceService"; "isPicker": "isPicker"; "labels": "labels"; "labelsMap": "labelsMap"; "labelTemplate": "labelTemplate"; "labelContentTemplate": "labelContentTemplate"; "dragData": "dragData"; "max": "max"; "marked": "marked"; "marksMap": "marksMap"; "min": "min"; "mouseSwipe": "mouseSwipe"; "mousewheel": "mousewheel"; "navigationService": "navigationService"; "noOuterChange": "noOuterChange"; "downIcon": "downIcon"; "nextIconH": "nextIconH"; "nextIconV": "nextIconV"; "nextPageText": "nextPageText"; "prevIconH": "prevIconH"; "prevIconV": "prevIconV"; "prevPageText": "prevPageText"; "upIcon": "upIcon"; "pages": "pages"; "pageLoad": "pageLoad"; "refDate": "refDate"; "resourcesMap": "resourcesMap"; "rangeEnd": "rangeEnd"; "rangeStart": "rangeStart"; "responsiveStyle": "responsiveStyle"; "selectedDates": "selectedDates"; "selectedEventsMap": "selectedEventsMap"; "selectView": "selectView"; "showCalendar": "showCalendar"; "showControls": "showControls"; "showEventTooltip": "showEventTooltip"; "showLabelCount": "showLabelCount"; "showOuterDays": "showOuterDays"; "showSchedule": "showSchedule"; "showToday": "showToday"; "showWeekNumbers": "showWeekNumbers"; "size": "size"; "startDay": "startDay"; "swipe": "swipe"; "labelList": "labelList"; "timeFormat": "timeFormat"; "timezonePlugin": "timezonePlugin"; "update": "update"; "valid": "valid"; "weeks": "weeks"; "width": "width"; "calendarScroll": "calendarScroll"; "calendarType": "calendarType"; "getDate": "getDate"; "getDay": "getDay"; "getMaxDayOfMonth": "getMaxDayOfMonth"; "getMonth": "getMonth"; "getWeekNumber": "getWeekNumber"; "getYear": "getYear"; "amText": "amText"; "dateFormat": "dateFormat"; "dayNames": "dayNames"; "dayNamesMin": "dayNamesMin"; "dayNamesShort": "dayNamesShort"; "eventText": "eventText"; "eventsText": "eventsText"; "firstDay": "firstDay"; "monthNames": "monthNames"; "monthNamesShort": "monthNamesShort"; "moreEventsPluralText": "moreEventsPluralText"; "moreEventsText": "moreEventsText"; "pmText": "pmText"; "todayText": "todayText"; "toText": "toText"; "weekText": "weekText"; "yearSuffix": "yearSuffix"; "onActiveChange": "onActiveChange"; "onCellHoverIn": "onCellHoverIn"; "onCellHoverOut": "onCellHoverOut"; "onDayClick": "onDayClick"; "onDayDoubleClick": "onDayDoubleClick"; "onDayRightClick": "onDayRightClick"; "onDayHoverIn": "onDayHoverIn"; "onDayHoverOut": "onDayHoverOut"; "onGestureStart": "onGestureStart"; "onLabelClick": "onLabelClick"; "onLabelDoubleClick": "onLabelDoubleClick"; "onLabelRightClick": "onLabelRightClick"; "onLabelHoverIn": "onLabelHoverIn"; "onLabelHoverOut": "onLabelHoverOut"; "onLabelDelete": "onLabelDelete"; "onLabelUpdateStart": "onLabelUpdateStart"; "onLabelUpdateMove": "onLabelUpdateMove"; "onLabelUpdateEnd": "onLabelUpdateEnd"; "onLabelUpdateModeOn": "onLabelUpdateModeOn"; "onLabelUpdateModeOff": "onLabelUpdateModeOff"; "onPageChange": "onPageChange"; "onPageLoaded": "onPageLoaded"; "onPageLoading": "onPageLoading"; "onResize": "onResize"; "onTodayClick": "onTodayClick"; }, {}, never, ["*"], false, never>;
}

//# sourceMappingURL=calendar-view.d.ts.map