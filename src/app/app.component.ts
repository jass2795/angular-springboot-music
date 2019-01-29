import { Component, OnInit } from '@angular/core';
import { SearchService } from './service/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'musicapplication';
  message: string;
  constructor(private router: Router, private data: SearchService) { }
  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }
  getmsg(value: string) {
    this.message = value;
  }
  search(message) {
    this.data.changeMessage(this.message);
    this.router.navigate(['/search', this.message]);
  }
}
