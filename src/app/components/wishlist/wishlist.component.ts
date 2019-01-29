import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Track } from './../track.component';
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
  constructor(private trackService: TrackService, private router: Router) {   }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.trackService.getTracksList().subscribe(data => this.tracks = (data));
  }
  deletetrack(trackid) {
    this.router.navigate(['/delete', trackid]);
  }
}
