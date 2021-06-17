import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css'],
})
export class TapComponent implements OnInit {
  constructor(private _designUtilityService: DesignUtilityService ) {}
  colorProperty;
  ngOnInit(): void {
    const Arr = ['red', 'blue', 'green','orange'];
    const source = interval(1000);
    let obsSubscription: Subscription;
    obsSubscription = source
      .pipe(
        tap((res) => {
          console.log(res);
          if (res == 4) {
            obsSubscription.unsubscribe();
            console.log("unsubscribe");
            
          }
        }),
        map((res) => {
          Arr[res];
          this.colorProperty = Arr[res];
        })
      )
      .subscribe((res) => {
        console.log(res);
        this._designUtilityService.print(res, "containerid8")
      });
  }
}
