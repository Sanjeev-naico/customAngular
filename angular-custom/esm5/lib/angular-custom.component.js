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
export { AngularCustomComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jdXN0b20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbmplZXYtbmFpY28vYW5ndWxhci1jdXN0b20vIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1jdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUS9FO0lBTUU7UUFMQSxTQUFJLEdBQVcsRUFBRSxDQUFBO1FBR1AsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTFDLENBQUM7SUFFakIseUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCwwQ0FBUyxHQUFULFVBQVUsS0FBVTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQTtRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLElBQUk7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBakJpQjtRQUFqQixLQUFLLENBQUMsU0FBUyxDQUFDOzJEQUFjO0lBQ1I7UUFBdEIsS0FBSyxDQUFDLGNBQWMsQ0FBQztnRUFBbUI7SUFDL0I7UUFBVCxNQUFNLEVBQUU7MkRBQWlEO0lBSi9DLHNCQUFzQjtRQU5sQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLG9XQUE4Qzs7U0FHL0MsQ0FBQztPQUNXLHNCQUFzQixDQW9CbEM7SUFBRCw2QkFBQztDQUFBLEFBcEJELElBb0JDO1NBcEJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFuZ3VsYXJDdXN0b20nLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FuZ3VsYXItY3VzdG9tLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9hbmd1bGFyLWN1c3RvbS5jb21wb25lbnQuc2Nzc1wiXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckN1c3RvbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRleHQ6IHN0cmluZyA9IFwiXCJcbiAgQElucHV0KFwiaXNFcnJvclwiKSBpc0Vycm9yOiBhbnk7XG4gIEBJbnB1dChcImVycm9yTWVzc2FnZVwiKSBlcnJvck1lc3NhZ2U6IGFueTtcbiAgQE91dHB1dCgpIGdldERhdGE6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkYXRhOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBnZXRjaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKFwiY3VzdG9tXCIsIGV2ZW50KVxuICAgIHRoaXMuZGF0YSA9IGV2ZW50XG4gICAgdGhpcy5pbnZva2VFdmVudCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgaW52b2tlRXZlbnQoZGF0YSkge1xuICAgIHRoaXMuZ2V0RGF0YS5lbWl0KGRhdGEpO1xuICB9XG59XG4iXX0=