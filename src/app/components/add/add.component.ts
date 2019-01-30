import { SearchService } from './../../service/search.service';
import { ActivatedRoute } from '@angular/router';
import { TrackService } from './../../service/track.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

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
  constructor(private route: ActivatedRoute, private trackService: TrackService, private searchService: SearchService) { }

  ngOnInit() {
    this.mbidnew = this.route.snapshot.paramMap.get('id');
    console.log(this.mbidnew);
     this.searchService.getTrackInfo(this.mbidnew)
    .subscribe( data => {
      console.log(data);
       this.track1.trackId = this.mbidnew;
        this.track1.trackName = data['track']['name'];
        this.track1.trackComments = data['track']['artist']['name'];
        // tslint:disable-next-line:quotemark
        this.track1.trackUrl = data['track'].album.image[3]['#text'];
        this.trackService.addTrack(this.track1).subscribe(data1 => console.log(data1));
    });
  }
}
