import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';
import { TrackService } from 'src/app/service/track.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   trackname ;
  trackName: any;
  alltracks: any;
  tracks: any;
  button = 'save to wishlist';

  public artist: string;
  public track: string;
  public mbidnew: any;
  public url: any;
  public track1 = {
     trackId: this.mbidnew,
     trackName: this.track,
      trackComments: this.artist,
      trackUrl: this.url
  };
  constructor(private route: ActivatedRoute, private searchService: SearchService, private trackService: TrackService) { }
    ngOnInit() {
    this.trackName = this.route.snapshot.paramMap.get('value');
    this.tracks =  this.searchService.getTrackByName(this.trackName).subscribe((data) => this.alltracks = (data));
    }
    savetrack(mbid) {
      console.log('this is working');
      this.searchService.getTrackInfo(mbid).subscribe(data => {
        this.track1.trackId = mbid;
        this.track1.trackName = data['track']['name'];
        this.track1.trackComments = data['track']['artist']['name'];
        // tslint:disable-next-line:quotemark
        this.track1.trackUrl = data['track'].album.image[3]['#text'];
        this.trackService.addTrack(this.track1).subscribe(data1 => console.log(data1));
        this.button = 'saved to wishlist';
      });
}
}
