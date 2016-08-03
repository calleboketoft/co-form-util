import {Component, Input} from '@angular/core'

@Component({
  selector: 'error-message',
  template: `
    <small [class]="textClass"
      [hidden]="control.valid || control.pristine || wait || !errorTriggered">
      <ng-content></ng-content>
    </small>
  `
})
export class ErrorMessageComponent {
  @Input() control;
  @Input() textClass: string = 'text-danger';
  @Input() trigger: string = 'ALL_ERRORS';
  @Input() timeout: number = 0;

  public errorTriggered = false
  public wait = true

  ngOnInit () {
    this.control.valueChanges
      .map(val => {
        this.wait = true

        if (this.control.errors && this.trigger && this.control.errors[this.trigger]) {
          this.errorTriggered = true
        } else if (this.control.errors && this.trigger === 'ALL_ERRORS') {
          this.errorTriggered = true
        } else {
          this.errorTriggered = false
        }

        return val
      })
      .debounceTime(this.timeout)
      .subscribe(val => this.wait = false)
  }
}
