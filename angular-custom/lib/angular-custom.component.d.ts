import { OnInit, EventEmitter } from '@angular/core';
export declare class AngularCustomComponent implements OnInit {
    text: string;
    isError: any;
    placeholder: any;
    errorMessage: any;
    getData: EventEmitter<any>;
    data: any;
    constructor();
    ngOnInit(): void;
    getchange(event: any): void;
    invokeEvent(data: any): void;
}
