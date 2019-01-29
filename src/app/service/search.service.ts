import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    trackName: string;
    private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
    constructor(private http: HttpClient) {}
    api_key =  '9785a407dbf2259d03e7e87a1e1e0173';
    apiUrl = 'http://ws.audioscrobbler.com/2.0';
    changeMessage(message: string) {
        this.trackName = message;
        console.log('in service');
        this.messageSource.next(message);
      }
    public getTrackInfo(mbid: any) {
        return this.http.get(this.apiUrl + '/?method=track.getInfo&api_key=' + this.api_key + '&mbid=' + mbid + '&format=json');
    }

    public getTrackByName(trackName: string) {
            return this.http.get(this.apiUrl + '/?method=track.search&track=' + trackName + '&api_key=' + this.api_key + '&format=json');
    }
}
