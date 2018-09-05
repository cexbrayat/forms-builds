/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { AbstractControlDirective } from './abstract_control_directive';
/**
 * A directive that contains multiple `NgControl`s.
 *
 * Only used by the forms module.
 *
 *
 * @abstract
 */
export class ControlContainer extends AbstractControlDirective {
    /**
     * Get the form to which this container belongs.
     * @return {?}
     */
    get formDirective() { return null; }
    /**
     * Get the path to this container.
     * @return {?}
     */
    get path() { return null; }
}
if (false) {
    /** @type {?} */
    ControlContainer.prototype.name;
}
//# sourceMappingURL=control_container.js.map