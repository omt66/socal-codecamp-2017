import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GiphyService {
    constructor(private http: Http) { }

    search(query: string) {
        let encodedQuery = encodeURI(query);
        let key = "c9f0d352f8584776967dd940a8e9b40a"; // My demo key
        let url = `https://api.giphy.com/v1/gifs/search?key=${key}&q=${encodedQuery}&limit=50`;

        console.log("url-> " + url);
        let headers = new Headers();
        let reqOptions = new RequestOptions({
            headers: headers
        });

        headers.append("Accept", "application/json");

        return this.http.get(url, reqOptions)
            .map(res => res.json().data);
    }
}