import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  titles: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(title: string): void {
    this.titles.push(title);
  }

}
