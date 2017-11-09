
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Injectable()
export class MusicplayService {
    title : string;
    description : string;
    publishedDate;
    constructor(private http : Http) {}

    getPlaylist(url : string) {
        return this
            .http
            .get(url)
            .map(res => res.json());
    }
}