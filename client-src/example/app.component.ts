import {Component, OnInit} from '@angular/core'
import {FormBuilder, Validators} from '@angular/forms'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'

@Component({
  selector: 'app',
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
      <form [formGroup]="myForm" novalidate (ngSubmit)="submitMyForm(myForm)">
        <div class="row">
          <div class="col-xs-4">
            <input-wrap [control]="myForm.controls.myName" [timeout]="1000">
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
                [textClass]="'text-warning'">
                Maximum 10 characters
              </error-message>
            </input-wrap>
          </div>
          <div class="col-xs-4">
            <input-wrap [control]="myForm.controls.myColor">
              <label class="form-control-label">Color</label>
              <input type="text" class="form-control form-control-danger"
                formControlName="myColor">
              <error-message [control]="myForm.controls.myColor" [trigger]="'required'">
                Required
              </error-message>
            </input-wrap>
          </div>
          <div class="col-xs-4">
            <label class="form-control-label">&nbsp;</label><br>
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
      ]],
      myColor: ['', [
        Validators.required
      ]]
    })
  }

  public submitMyForm (myForm) {
    if (!myForm.valid) {
      Object.keys(myForm.controls).forEach(controlKey => {
        myForm.controls[controlKey].markAsDirty()
        myForm.controls[controlKey].updateValueAndValidity()
      })
      alert('please fix validation errors')
    } else {
      alert('form submission ok')
    }
  }
}
