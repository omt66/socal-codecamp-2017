import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GifInfo } from "app/models/gif-info";

@Component({
    selector: 'gif-card',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class GifCard implements OnInit {
    @Input() gifInfo: GifInfo;
    @Output() clicked = new EventEmitter<GifInfo>();

    constructor() { }

    ngOnInit() { }

    getBackground() {
        return "url(" + this.gifInfo.url + ")";
    }

    handleClick() {
        this.clicked.emit(this.gifInfo);
    }
}