import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'view-type',
    templateUrl: './view-type.component.html',
    styleUrls: ['./view-type.component.css']
})
export class SelectViewComponent {
    viewType: number;
    @Output()
    selectView = new EventEmitter<number>();

    constructor() {}

    selectNewView() : void {
        this.selectView.emit(this.viewType);
    }
}