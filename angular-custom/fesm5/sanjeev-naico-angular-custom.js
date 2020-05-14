import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, Input, Output, Component, NgModule } from '@angular/core';

var AngularCustomService = /** @class */ (function () {
    function AngularCustomService() {
    }
    AngularCustomService.ɵprov = ɵɵdefineInjectable({ factory: function AngularCustomService_Factory() { return new AngularCustomService(); }, token: AngularCustomService, providedIn: "root" });
    AngularCustomService = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], AngularCustomService);
    return AngularCustomService;
}());

var AngularCustomComponent = /** @class */ (function () {
    function AngularCustomComponent() {
        this.text = "";
        this.getData = new EventEmitter();
    }
    AngularCustomComponent.prototype.ngOnInit = function () {
    };
    AngularCustomComponent.prototype.getchange = function (event) {
        console.log("custom", event);
        this.data = event;
        this.invokeEvent(this.data);
    };
    AngularCustomComponent.prototype.invokeEvent = function (data) {
        this.getData.emit(data);
    };
    __decorate([
        Input("isError")
    ], AngularCustomComponent.prototype, "isError", void 0);
    __decorate([
        Input("errorMessage")
    ], AngularCustomComponent.prototype, "errorMessage", void 0);
    __decorate([
        Output()
    ], AngularCustomComponent.prototype, "getData", void 0);
    AngularCustomComponent = __decorate([
        Component({
            selector: 'lib-angularCustom',
            template: "<div>\r\n    <input class=\"input-text\" type=\"text\"  value=\"{{ text }}\" onchange=\"getchange($event)\" [disabled]=\"false\"\r\n      placeholder=\"input\" />\r\n    <div id=\"errdiv3\" class=\"col-sm-12 nopad hide-div\">\r\n      <p id=\"errtext3\" class=\"error-text\"  [hidden]=\"!isError\">{{errorMessage}}</p>\r\n    </div>\r\n  </div>",
            styles: [".error-text{text-align:left;color:red;font-size:.8rem;margin:0}"]
        })
    ], AngularCustomComponent);
    return AngularCustomComponent;
}());

var AngularCustomModule = /** @class */ (function () {
    function AngularCustomModule() {
    }
    AngularCustomModule = __decorate([
        NgModule({
            declarations: [AngularCustomComponent],
            imports: [],
            exports: [AngularCustomComponent]
        })
    ], AngularCustomModule);
    return AngularCustomModule;
}());

/*
 * Public API Surface of angular-custom
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularCustomComponent, AngularCustomModule, AngularCustomService };
//# sourceMappingURL=sanjeev-naico-angular-custom.js.map
