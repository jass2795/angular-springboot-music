import { Track } from './../components/track.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class TrackService {
    constructor(private http: HttpClient) { }
    private baseUrl = 'http://localhost:8090/api/v1/';

  addTrack(track: Object): Observable<Object> {
   console.log(track);
    return this.http.post(this.baseUrl + 'track', track);
  }

  updateTrack(id: number, value: string): Observable<Object> {
    return this.http.put(this.baseUrl + id + '/' + value, value);
  }

  deleteTrack(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'track/' + id);
  }

  getTracksList() {
    return this.http.get(this.baseUrl + 'tracks');
  }
}
