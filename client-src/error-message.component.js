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
var core_1 = require("@angular/core");
var ErrorMessageComponent = (function () {
    function ErrorMessageComponent() {
        this.textClass = 'text-danger';
        this.trigger = 'ALL_ERRORS';
        this.timeout = 0;
        this.errorTriggered = false;
        this.wait = false;
    }
    ErrorMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.control.valueChanges
            .map(function (val) {
            _this.wait = true;
            if (_this.control.errors && _this.trigger && _this.control.errors[_this.trigger]) {
                _this.errorTriggered = true;
            }
            else if (_this.control.errors && _this.trigger === 'ALL_ERRORS') {
                _this.errorTriggered = true;
            }
            else {
                _this.errorTriggered = false;
            }
            return val;
        })
            .debounceTime(this.timeout)
            .subscribe(function (val) { return _this.wait = false; });
    };
    return ErrorMessageComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ErrorMessageComponent.prototype, "control", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ErrorMessageComponent.prototype, "textClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ErrorMessageComponent.prototype, "trigger", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ErrorMessageComponent.prototype, "timeout", void 0);
ErrorMessageComponent = __decorate([
    core_1.Component({
        selector: 'error-message',
        template: "\n    <small [class]=\"textClass\"\n      [hidden]=\"control.valid || control.pristine || wait || !errorTriggered\">\n      <ng-content></ng-content>\n    </small>\n  "
    }),
    __metadata("design:paramtypes", [])
], ErrorMessageComponent);
exports.ErrorMessageComponent = ErrorMessageComponent;
//# sourceMappingURL=error-message.component.js.map