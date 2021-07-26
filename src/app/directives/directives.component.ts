import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  displayArr: any[] = [];
  showParagraph: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onDisplayDetails(): void {
    this.showParagraph = !this.showParagraph;
    this.displayArr.push(Date.now());

  }

}
