import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css'],
})
export class OfFromComponent implements OnInit {
  constructor(private _designUtility: DesignUtilityService) {}
  objMsg: any;
  arrMsg: any;
  ngOnInit(): void {
    const dataString = of('Anup', 'Shekhar', 'Raja');

    dataString.subscribe((res) => {
      // console.log(res);
      this._designUtility.print(res, 'containerId');
    });

    // ! data is here Object {}
    const dataObject = of({ a: 'Anup', b: 'Shekhar', c: 'Raja' });

    dataObject.subscribe((res) => {
      // console.log(res);
      this.objMsg = res;
    });
    // ! data is here Aray []
    const dataArray = from(['Anup', 'Shekhar', 'Raja']);

    dataArray.subscribe((res) => {
      // console.log('arr', res);
      this.arrMsg = res;
      this._designUtility.print(this.arrMsg, 'containerId3');
    });

    // ! From - Promise to observable
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });
    const obs4 = from(promise);
    obs4.subscribe((res) => {
      console.log('arr', res);
      this.arrMsg = res;
      this._designUtility.print(this.arrMsg, 'containerId4');
    });

    // ! From - string to observable
    const obs5 = from('Welcome to India');
    obs5.subscribe((res) => {
      // console.log('arr', res);
      this.arrMsg = res;
      this._designUtility.print(this.arrMsg, 'containerId5');
    });
  }
}
