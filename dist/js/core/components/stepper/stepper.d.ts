import { BaseComponent, IBaseProps } from '../../base';
import * as ɵngcc0 from '@angular/core';
export interface MbscStepperOptions extends IBaseProps {
    color?: string;
    defaultValue?: number;
    description?: string;
    disabled?: boolean;
    inputClass?: string;
    inputPosition?: 'start' | 'end' | 'center';
    label?: string;
    min?: number;
    max?: number;
    modelValue?: number;
    onChange?: any;
    step?: number;
    value?: number;
}
/** @hidden */
export interface MbscStepperState {
    value?: number;
    disabled?: boolean;
}
/** @hidden */
export declare class StepperBase extends BaseComponent<MbscStepperOptions, MbscStepperState> {
    static defaults: MbscStepperOptions;
    protected static _name: string;
    _cssClass: string;
    _disabled: boolean;
    _disabledMinus: boolean;
    _disabledPlus: boolean;
    _input: HTMLInputElement;
    _max: number;
    _min: number;
    _step: number;
    _value: number;
    private _changed;
    _onChange: (ev: any) => void;
    _onMinusClick: () => void;
    _onPlusClick: () => void;
    _setInput: (input: HTMLInputElement) => void;
    _onLabelClick: (ev: any) => void;
    _change(val: number): void;
    protected _mounted(): void;
    protected _render(s: MbscStepperOptions, state: MbscStepperState): void;
    protected _updated(): void;
    protected _destroy(): void;
    private _round;
    private _setValue;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<StepperBase, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<StepperBase, "[mbsc-stepper]", never, {}, {}, never, never, false, never>;
}

//# sourceMappingURL=stepper.d.ts.map