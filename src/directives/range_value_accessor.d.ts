/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ElementRef, Renderer2, StaticProvider } from '@angular/core';
import { ControlValueAccessor } from './control_value_accessor';
export declare const RANGE_VALUE_ACCESSOR: StaticProvider;
/**
 * The accessor for writing a range value and listening to changes that is used by the
 * `NgModel`, `FormControlDirective`, and `FormControlName` directives.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * <input type="range" [(ngModel)]="age" >
 * ```
 *
 * @ngModule FormsModule
 * @ngModule ReactiveFormsModule
 */
export declare class RangeValueAccessor implements ControlValueAccessor {
    private _renderer;
    private _elementRef;
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(_renderer: Renderer2, _elementRef: ElementRef);
    writeValue(value: any): void;
    registerOnChange(fn: (_: number | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
