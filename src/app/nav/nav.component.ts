import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
title: string = 'Crash2 (same as Home)'; // All variables defined in ts are accessed directly in the html


  constructor() { }

  ngOnInit() {
  }

}
