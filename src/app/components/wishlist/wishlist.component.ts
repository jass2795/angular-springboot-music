import { SearchService } from './../../service/search.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { TrackService } from 'src/app/service/track.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WishlistComponent implements OnInit {
  tracks: any;
  track: any;
  newid: any;
  artist: any;
  url: any;
  track1 = {
    trackId: this.newid,
    trackName: this.track,
    trackComments: this.artist,
    trackUrl: this.url
  };
  constructor(private trackService: TrackService, private searchService: SearchService, private router: Router) {}

  ngOnInit() {
   this.reloadData();

  }
  reloadData() {
    this.trackService.getTracksList().subscribe(data => this.tracks = (data));
  }
  deletetrack(trackid) {
    this.trackService.deleteTrack(trackid).subscribe(data => console.log(data));
    window.location.reload();
  }
  updatetrack(trackid, value) {
    // this.searchService.getTrackInfo(trackid).subscribe(data => {
    //   this.track1.trackId = trackid;
    //   this.track1.trackName = data['track']['name'];
    //   this.track1.trackComments = value;
    //   this.track1.trackUrl = data['track'].album.image[3]['#text'];
    //   this.trackService.updateTrack(trackid, value).subscribe(data1 => console.log(data1));
    //   this.reloadData();
    this.router.navigate(['/update', trackid, value]);
    }
    // window.location.reload();
  }

