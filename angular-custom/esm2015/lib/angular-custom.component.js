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
        template: "<div>\r\n    <input class=\"input-text\" type=\"text\"  value=\"{{ text }}\" (input)=\"getchange($event)\" [disabled]=\"false\"\r\n      placeholder=\"{{placeholder}}\" />\r\n    <div id=\"errdiv3\" class=\"col-sm-12 nopad hide-div\">\r\n      <p id=\"errtext3\" class=\"error-text\"  [hidden]=\"!isError\">{{errorMessage}}</p>\r\n    </div>\r\n  </div>",
        styles: [".error-text{text-align:left;color:red;font-size:.8rem;margin:0}"]
    })
], AngularCustomComponent);
export { AngularCustomComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1jdXN0b20uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbmplZXYtbmFpY28vYW5ndWxhci1jdXN0b20vIiwic291cmNlcyI6WyJsaWIvYW5ndWxhci1jdXN0b20uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUS9FLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBT2pDO1FBTkEsU0FBSSxHQUFXLEVBQUUsQ0FBQTtRQUlQLFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUxQyxDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQVU7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsV0FBVyxDQUFDLElBQUk7UUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0YsQ0FBQTtBQWxCbUI7SUFBakIsS0FBSyxDQUFDLFNBQVMsQ0FBQzt1REFBYztBQUNUO0lBQXJCLEtBQUssQ0FBQyxhQUFhLENBQUM7MkRBQWtCO0FBQ2hCO0lBQXRCLEtBQUssQ0FBQyxjQUFjLENBQUM7NERBQW1CO0FBQy9CO0lBQVQsTUFBTSxFQUFFO3VEQUFpRDtBQUwvQyxzQkFBc0I7SUFObEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3Qiw2V0FBOEM7O0tBRy9DLENBQUM7R0FDVyxzQkFBc0IsQ0FvQmxDO1NBcEJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFuZ3VsYXJDdXN0b20nLFxuICB0ZW1wbGF0ZVVybDogXCIuL2FuZ3VsYXItY3VzdG9tLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9hbmd1bGFyLWN1c3RvbS5jb21wb25lbnQuc2Nzc1wiXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhckN1c3RvbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHRleHQ6IHN0cmluZyA9IFwiXCJcbiAgQElucHV0KFwiaXNFcnJvclwiKSBpc0Vycm9yOiBhbnk7XG4gIEBJbnB1dChcInBsYWNlaG9sZGVyXCIpIHBsYWNlaG9sZGVyOiBhbnk7XG4gIEBJbnB1dChcImVycm9yTWVzc2FnZVwiKSBlcnJvck1lc3NhZ2U6IGFueTtcbiAgQE91dHB1dCgpIGdldERhdGE6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBkYXRhOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBnZXRjaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZGF0YSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgIHRoaXMuaW52b2tlRXZlbnQodGhpcy5kYXRhKTtcbiAgfVxuXG4gIGludm9rZUV2ZW50KGRhdGEpIHtcbiAgICB0aGlzLmdldERhdGEuZW1pdChkYXRhKTtcbiAgfVxufVxuIl19