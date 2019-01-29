import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/service/search.service';

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
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }
    ngOnInit() {
    this.trackName = this.route.snapshot.paramMap.get('value');
    this.tracks =  this.searchService.getTrackByName(this.trackName).subscribe((data) => this.alltracks = (data));
    }
}
