import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let AngularCustomComponent = class AngularCustomComponent {
    constructor() {
        this.text = "";
        this.getData = new EventEmitter();
    }
    ngOnInit() {
    }
    getchange(event) {
        console.log("custom", event);
        this.data = event;
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
export { AngularCustomComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jdXN0b20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbmplZXYtbmFpY28vYW5ndWxhci1jdXN0b20vIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1jdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUS9FLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBTWpDO1FBTEEsU0FBSSxHQUFXLEVBQUUsQ0FBQTtRQUdQLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUxQyxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQVU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUE7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFJO1FBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztDQUNGLENBQUE7QUFsQm1CO0lBQWpCLEtBQUssQ0FBQyxTQUFTLENBQUM7dURBQWM7QUFDUjtJQUF0QixLQUFLLENBQUMsY0FBYyxDQUFDOzREQUFtQjtBQUMvQjtJQUFULE1BQU0sRUFBRTt1REFBaUQ7QUFKL0Msc0JBQXNCO0lBTmxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0Isb1dBQThDOztLQUcvQyxDQUFDO0dBQ1csc0JBQXNCLENBb0JsQztTQXBCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1hbmd1bGFyQ3VzdG9tJyxcbiAgdGVtcGxhdGVVcmw6IFwiLi9hbmd1bGFyLWN1c3RvbS5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYW5ndWxhci1jdXN0b20uY29tcG9uZW50LnNjc3NcIlxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJDdXN0b21Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0ZXh0OiBzdHJpbmcgPSBcIlwiXG4gIEBJbnB1dChcImlzRXJyb3JcIikgaXNFcnJvcjogYW55O1xuICBASW5wdXQoXCJlcnJvck1lc3NhZ2VcIikgZXJyb3JNZXNzYWdlOiBhbnk7XG4gIEBPdXRwdXQoKSBnZXREYXRhOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgZGF0YTogYW55O1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgZ2V0Y2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhcImN1c3RvbVwiLCBldmVudClcbiAgICB0aGlzLmRhdGEgPSBldmVudFxuICAgIHRoaXMuaW52b2tlRXZlbnQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIGludm9rZUV2ZW50KGRhdGEpIHtcbiAgICB0aGlzLmdldERhdGEuZW1pdChkYXRhKTtcbiAgfVxufVxuIl19