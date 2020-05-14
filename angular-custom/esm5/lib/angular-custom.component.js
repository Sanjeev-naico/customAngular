import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var AngularCustomComponent = /** @class */ (function () {
    function AngularCustomComponent() {
        this.text = "";
        this.getData = new EventEmitter();
    }
    AngularCustomComponent.prototype.ngOnInit = function () {
    };
    AngularCustomComponent.prototype.getchange = function (event) {
        this.data = event.target.value;
        this.invokeEvent(this.data);
    };
    AngularCustomComponent.prototype.invokeEvent = function (data) {
        this.getData.emit(data);
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
    return AngularCustomComponent;
}());
export { AngularCustomComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jdXN0b20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbmplZXYtbmFpY28vYW5ndWxhci1jdXN0b20vIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1jdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUS9FO0lBT0U7UUFOQSxTQUFJLEdBQVcsRUFBRSxDQUFBO1FBSVAsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTFDLENBQUM7SUFFakIseUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCwwQ0FBUyxHQUFULFVBQVUsS0FBVTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCw0Q0FBVyxHQUFYLFVBQVksSUFBSTtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFqQmlCO1FBQWpCLEtBQUssQ0FBQyxTQUFTLENBQUM7MkRBQWM7SUFDVDtRQUFyQixLQUFLLENBQUMsYUFBYSxDQUFDOytEQUFrQjtJQUNoQjtRQUF0QixLQUFLLENBQUMsY0FBYyxDQUFDO2dFQUFtQjtJQUMvQjtRQUFULE1BQU0sRUFBRTsyREFBaUQ7SUFML0Msc0JBQXNCO1FBTmxDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IseVdBQThDOztTQUcvQyxDQUFDO09BQ1csc0JBQXNCLENBb0JsQztJQUFELDZCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FwQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYW5ndWxhckN1c3RvbScsXG4gIHRlbXBsYXRlVXJsOiBcIi4vYW5ndWxhci1jdXN0b20uY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2FuZ3VsYXItY3VzdG9tLmNvbXBvbmVudC5zY3NzXCJcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyQ3VzdG9tQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdGV4dDogc3RyaW5nID0gXCJcIlxuICBASW5wdXQoXCJpc0Vycm9yXCIpIGlzRXJyb3I6IGFueTtcbiAgQElucHV0KFwicGxhY2Vob2xkZXJcIikgcGxhY2Vob2xkZXI6IGFueTtcbiAgQElucHV0KFwiZXJyb3JNZXNzYWdlXCIpIGVycm9yTWVzc2FnZTogYW55O1xuICBAT3V0cHV0KCkgZ2V0RGF0YTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGRhdGE6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIGdldGNoYW5nZShldmVudDogYW55KSB7XG4gICAgdGhpcy5kYXRhID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgdGhpcy5pbnZva2VFdmVudCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgaW52b2tlRXZlbnQoZGF0YSkge1xuICAgIHRoaXMuZ2V0RGF0YS5lbWl0KGRhdGEpO1xuICB9XG59XG4iXX0=