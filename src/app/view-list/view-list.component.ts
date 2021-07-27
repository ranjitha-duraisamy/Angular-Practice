import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  @Input() titles: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
