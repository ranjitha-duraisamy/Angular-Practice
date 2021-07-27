import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() save = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(title: HTMLInputElement): void {
    this.save.emit(title.value);
  }

}
