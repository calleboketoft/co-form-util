import {Component, OnInit} from '@angular/core'
import {FormBuilder, REACTIVE_FORM_DIRECTIVES, Validators} from '@angular/forms'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'

import {ErrorMessageComponent} from '../error-message.component'
import {FormGroupComponent} from '../form-group.component'

@Component({
  selector: 'app',
  directives: [
    REACTIVE_FORM_DIRECTIVES,
    ErrorMessageComponent,
    FormGroupComponent
  ],
  styles: [`
    .ng-valid {
      border-left: 5px solid #42A948; /* green */
    }

    .ng-invalid {
      border-left: 5px solid #a94442; /* red */
    }
  `],
  template: `
    <div class="container">
      <h3>Form util examples</h3>
      <form [formGroup]="myForm" (ngSubmit)="submitMyForm(myForm)">
        <div class="row">
          <div class="col-xs-4">
            <form-group [control]="myForm.controls.myName" [timeout]="1000">
              <label class="form-control-label">Name</label>
              <input type="text" class="form-control form-control-danger" formControlName="myName">
              <error-message [control]="myForm.controls.myName" [trigger]="'required'">
                Required
              </error-message>
              <error-message [control]="myForm.controls.myName" [trigger]="'minlength'"
                [timeout]="1000">
                Minimum 5 characters
              </error-message>
              <error-message [control]="myForm.controls.myName" [trigger]="'maxlength'"
                [debounceTime]="0">
                Maximum 10 characters
              </error-message>
            </form-group>
          </div>
          <div class="col-xs-4">
          </div>
          <div class="col-xs-4">
            <button type="submit" class="btn btn-success">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor (public formBuilder: FormBuilder) {}

  public myForm;

  ngOnInit () {
    this.myForm = this.formBuilder.group({
      myName: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
      ]]
    })
  }

  public submitMyForm (myForm) {
    console.log(myForm)
  }
}
