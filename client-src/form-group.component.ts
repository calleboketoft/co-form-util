import {Component, Input} from '@angular/core'

@Component({
  selector: 'form-group',
  template: `
    <div class="form-group" [class.has-danger]="!control.valid && !control.pristine && !wait">
      <ng-content></ng-content>
    </div>
  `
})
export class FormGroupComponent {
  @Input() control;
  @Input() timeout: number = 0;

  public wait = true;

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
