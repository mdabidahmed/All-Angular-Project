import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit {
  @ViewChild('addBtn') addBtn: ElementRef;
  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    let count = 0;
    // *! / Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      ++count;
      console.log('video-'+count);
      this._designUtility.print(count,'elcontainer');
      this._designUtility.print(count,'elcontainer2');
    });
  }

}
