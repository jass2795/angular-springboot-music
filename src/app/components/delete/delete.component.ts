import { ActivatedRoute } from '@angular/router';
import { WishlistComponent } from './../wishlist/wishlist.component';
import { TrackService } from './../../service/track.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  trackid: any;
  constructor(private route: ActivatedRoute, private trackService: TrackService) { }
  ngOnInit() {
    this.trackid = this.route.snapshot.paramMap.get('id');
    console.log(this.trackid);
    this.trackService.deleteTrack(this.trackid)
    .subscribe(data => console.log(data));
  }
}
