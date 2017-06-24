import { GifInfo } from './../../models/gif-info';
import { GiphyService } from './../../services/giphy.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'search-page',
    templateUrl: './index.html',
    styleUrls: ['./index.scss']
})
export class SearchPage implements OnInit {
    queryStr = "cute cat";
    results;
    selectedItem;

    constructor(private giphyService: GiphyService) { }

    ngOnInit() {

    }

    doSearch() {
        this.giphyService.search(this.queryStr)
            .subscribe(res => {
                this.results = res;
                this.results = [];
                res.forEach(r => {
                    this.results.push({url: r.images.fixed_width.url});
                });
                console.log("Results", this.results);
            });
    }

    handleClicked(item) {
        console.log("Clicked", item);
        this.selectedItem = item;
    }

    handleClick4BigCard() {
        this.selectedItem = undefined;
    }

    closeDetailedView() {
        this.selectedItem = undefined;
    }
}