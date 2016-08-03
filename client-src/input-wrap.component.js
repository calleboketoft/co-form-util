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
var InputWrapComponent = (function () {
    function InputWrapComponent() {
        this.timeout = 0;
        this.wait = true;
    }
    InputWrapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.control.valueChanges
            .map(function (val) {
            _this.wait = true;
            return val;
        })
            .debounceTime(this.timeout)
            .subscribe(function (val) { return _this.wait = false; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], InputWrapComponent.prototype, "control", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], InputWrapComponent.prototype, "timeout", void 0);
    InputWrapComponent = __decorate([
        core_1.Component({
            selector: 'input-wrap',
            template: "\n    <fieldset class=\"form-group\" [class.has-danger]=\"!control.valid && !control.pristine && !wait\">\n      <ng-content></ng-content>\n    </fieldset>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], InputWrapComponent);
    return InputWrapComponent;
}());
exports.InputWrapComponent = InputWrapComponent;
//# sourceMappingURL=input-wrap.component.js.map