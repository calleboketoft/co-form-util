"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
require('rxjs/add/operator/map');
require('rxjs/add/operator/debounceTime');
var error_message_component_1 = require('../error-message.component');
var form_group_component_1 = require('../form-group.component');
var AppComponent = (function () {
    function AppComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            myName: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(5),
                    forms_1.Validators.maxLength(10)
                ]]
        });
    };
    AppComponent.prototype.submitMyForm = function (myForm) {
        console.log(myForm);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            directives: [
                forms_1.REACTIVE_FORM_DIRECTIVES,
                error_message_component_1.ErrorMessageComponent,
                form_group_component_1.FormGroupComponent
            ],
            styles: ["\n    .ng-valid {\n      border-left: 5px solid #42A948; /* green */\n    }\n\n    .ng-invalid {\n      border-left: 5px solid #a94442; /* red */\n    }\n  "],
            template: "\n    <div class=\"container\">\n      <h3>Form util examples</h3>\n      <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"submitMyForm(myForm)\">\n        <div class=\"row\">\n          <div class=\"col-xs-4\">\n            <form-group [control]=\"myForm.controls.myName\" [timeout]=\"1000\">\n              <label class=\"form-control-label\">Name</label>\n              <input type=\"text\" class=\"form-control form-control-danger\" formControlName=\"myName\">\n              <error-message [control]=\"myForm.controls.myName\" [trigger]=\"'required'\">\n                Required\n              </error-message>\n              <error-message [control]=\"myForm.controls.myName\" [trigger]=\"'minlength'\"\n                [timeout]=\"1000\">\n                Minimum 5 characters\n              </error-message>\n              <error-message [control]=\"myForm.controls.myName\" [trigger]=\"'maxlength'\"\n                [textClass]=\"'text-warning'\">\n                Maximum 10 characters\n              </error-message>\n            </form-group>\n          </div>\n          <div class=\"col-xs-4\">\n          </div>\n          <div class=\"col-xs-4\">\n            <button type=\"submit\" class=\"btn btn-success\">\n              Submit\n            </button>\n          </div>\n        </div>\n      </form>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map