import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

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
    constructor() { }
    ngOnInit() {
    }
};
AngularCustomComponent = __decorate([
    Component({
        selector: 'lib-angularCustom',
        template: `
    <p>
      angular-custom works!
    </p>
  `
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
