import { SearchService } from './../../service/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TrackService } from './../../service/track.service';
import { WishlistComponent } from './../wishlist/wishlist.component';
import { Track } from './../track.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  track: any;
  newid: any;
  artist: any;
  url: any;
  newcomment: any;
  public track1 = {
    trackId: this.newid,
    trackName: this.track,
     trackComments: this.artist,
     trackUrl: this.url
 };
 oldcomment: any;
  constructor(private route: ActivatedRoute, private tracks: TrackService, private searchs: SearchService, private router: Router ) { }
  ngOnInit() {
    this.newid = this.route.snapshot.paramMap.get('id');
    this.newcomment = this.route.snapshot.paramMap.get('value');
    this.searchs.getTrackInfo(this.newid).subscribe(data => {
      this.track1.trackId = this.newid;
      this.track1.trackName = data['track']['name'];
      this.track1.trackComments = this.newcomment;
      this.track1.trackUrl = data['track'].album.image[3]['#text'];
      this.tracks.updateTrack(this.newid, this.newcomment).subscribe(data1 => console.log(data1));
      this.router.navigate(['/wishlist']);
      window.location.reload();
    });
  }
}
