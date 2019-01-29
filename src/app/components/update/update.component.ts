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
  ngOnInit() {
  }
  constructor(private trackService: TrackService, private listComponent: WishlistComponent ) { }
  updateActive(isActive: boolean) {
    this.trackService.updateTrack(this.track.trackId, this.track.trackComments)
      .subscribe(
        data => {
          console.log(data);
          this.track = data as Track;
        },
        error => console.log(error));
  }
  deleteTrack() {
    this.trackService.deleteTrack(this.track.trackId)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
