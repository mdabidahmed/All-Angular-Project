import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent implements OnInit {
  obsMsg;
  videoSubscription: Subscription;
  constructor(private _designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    // const broadCastVideo = interval(interval);
    // !? const broadCastVideo = timer(delay, interval);
    const broadCastVideo = timer(5000, 1000);

    this.videoSubscription = broadCastVideo.subscribe((res) => {
      console.log(res);
      this.obsMsg = res + 1;
      this._designUtility.print(this.obsMsg, 'elContainer');
      this._designUtility.print(this.obsMsg, 'elContainer1');
      this._designUtility.print(this.obsMsg, 'elContainer2');
      if (res >= 4) {
        this.videoSubscription.unsubscribe();
      }
    });
  }
}
