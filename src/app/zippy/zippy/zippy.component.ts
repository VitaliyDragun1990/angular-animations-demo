import { Component, Input, OnInit } from '@angular/core';
import { expandCollapse } from './zippy.animations';


@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [ expandCollapse ]
})
export class ZippyComponent implements OnInit {
  @Input('title') title: string;
  isExpanded: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
