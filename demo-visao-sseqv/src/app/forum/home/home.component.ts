import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  listType: string = 'all';

  constructor(
    private router: Router
  ) {}

  setListTo(string) {
    console.log(string);
    if(string === 'all') {
      this.listType = string;
    } else {
      this.listType = 'feed';
    }
  }

}