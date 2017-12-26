import { Directive, forwardRef, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

export const EQUAL_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EqualValidator),
  multi: true
};

/**
 * Generated class for the EqualValidatorDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[validateEqual][formControlName], [validateEqual][formControl], [validateEqual][ngModel]',
  providers: [EQUAL_VALIDATOR]
})

export class EqualValidator implements Validator {

  constructor() {
    console.log('Hello EqualValidatorDirective Directive');
  }

  @Input() validateEqual: string;
  @Input() reverse: string;

  private get isReverse() {
    if (!this.reverse) return false;
    return this.reverse === 'true' ? true : false;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    let v = c.value;

    let e = c.root.get(this.validateEqual);

    if (e && v !== e.value && !this.isReverse) {
      return {
        validateEqual: false
      }
    }

    if (e && v !== e.value && this.isReverse) {
      e.setErrors({
        validateEqual: false
      });
    }

    return null;
  }
}
