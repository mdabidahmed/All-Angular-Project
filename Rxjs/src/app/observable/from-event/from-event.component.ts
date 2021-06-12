import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit {
  @ViewChild('addBtn') addBtn: ElementRef;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    let count = 1;
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      console.log('video-'+count++);
    });
  }
}
