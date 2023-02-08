import { BaseComponent } from '../../base';
import { MbscDatetimeOptions, MbscDatetimeState } from '../datetime/datetime';
import * as ɵngcc0 from '@angular/core';
export interface ITimeSlot {
    value: number;
    formattedValue: string;
}
export declare class TimegridBase extends BaseComponent<MbscDatetimeOptions, MbscDatetimeState> {
    /** @hidden */
    static defaults: MbscDatetimeOptions;
    protected static _name: string;
    /** @hidden */
    _cssClass: string;
    _valids: {
        [key: number]: any[];
    } | undefined;
    _invalids: {
        [key: number]: any[];
    } | undefined;
    _timeSlots: ITimeSlot[][];
    _value: number;
    _gridContEl: HTMLElement;
    private _min;
    private _max;
    private _validTimes;
    private _selectedDate;
    private _valueChanged;
    private _lastValue?;
    private _validationHandle?;
    private _isOpen?;
    _setTime: (timeSlot: ITimeSlot) => void;
    _isDisabled: (d: number) => boolean;
    _onKeyDown: (ev: any) => void;
    _setCont: (el: HTMLDivElement) => void;
    protected _render(s: MbscDatetimeOptions, state: MbscDatetimeState): void;
    protected _updated(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<TimegridBase, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<TimegridBase, "[mbsc-tg-b]", never, {}, {}, never, never, false, never>;
}

//# sourceMappingURL=timegrid.d.ts.map