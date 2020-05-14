import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, EventEmitter, Input, Output, Component, NgModule } from '@angular/core';

let AngularCustomService = class AngularCustomService {
    constructor() { }
};
AngularCustomService.ɵprov = ɵɵdefineInjectable({ factory: function AngularCustomService_Factory() { return new AngularCustomService(); }, token: AngularCustomService, providedIn: "root" });
AngularCustomService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AngularCustomService);

let AngularCustomComponent = class AngularCustomComponent {
    constructor() {
        this.text = "";
        this.getData = new EventEmitter();
    }
    ngOnInit() {
    }
    getchange(event) {
        this.data = event.target.value;
        this.invokeEvent(this.data);
    }
    invokeEvent(data) {
        this.getData.emit(data);
    }
};
__decorate([
    Input("isError")
], AngularCustomComponent.prototype, "isError", void 0);
__decorate([
    Input("placeholder")
], AngularCustomComponent.prototype, "placeholder", void 0);
__decorate([
    Input("errorMessage")
], AngularCustomComponent.prototype, "errorMessage", void 0);
__decorate([
    Output()
], AngularCustomComponent.prototype, "getData", void 0);
AngularCustomComponent = __decorate([
    Component({
        selector: 'lib-angularCustom',
        template: "<div>\r\n    <input class=\"input-text\" type=\"text\"  value=\"{{ text }}\" (input)=\"getchange($event)\" [disabled]=\"false\"\r\n      placeholder=\"placeholder\" />\r\n    <div id=\"errdiv3\" class=\"col-sm-12 nopad hide-div\">\r\n      <p id=\"errtext3\" class=\"error-text\"  [hidden]=\"!isError\">{{errorMessage}}</p>\r\n    </div>\r\n  </div>",
        styles: [".error-text{text-align:left;color:red;font-size:.8rem;margin:0}"]
    })
], AngularCustomComponent);

let AngularCustomModule = class AngularCustomModule {
};
AngularCustomModule = __decorate([
    NgModule({
        declarations: [AngularCustomComponent],
        imports: [],
        exports: [AngularCustomComponent]
    })
], AngularCustomModule);

/*
 * Public API Surface of angular-custom
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularCustomComponent, AngularCustomModule, AngularCustomService };
//# sourceMappingURL=sanjeev-naico-angular-custom.js.map
