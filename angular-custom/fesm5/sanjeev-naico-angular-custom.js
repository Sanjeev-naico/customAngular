import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

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
    }
    AngularCustomComponent.prototype.ngOnInit = function () {
    };
    AngularCustomComponent = __decorate([
        Component({
            selector: 'lib-angularCustom',
            template: "\n    <p>\n      angular-custom works!\n    </p>\n  "
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
