import { Component, Input } from '@angular/core'

@Component({
  selector: 'input-wrap',
  template: `
    <fieldset class="form-group" [class.has-danger]="!control.valid && !control.pristine && !wait">
      <ng-content></ng-content>
    </fieldset>
  `
})
export class InputWrapComponent {
  @Input() control
  @Input() timeout: number = 0

  public wait = false

  ngOnInit () {
    this.control.valueChanges
      .map(val => {
        this.wait = true
        return val
      })
      .debounceTime(this.timeout)
      .subscribe(val => this.wait = false)
  }
}
