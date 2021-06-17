import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take,toArray } from 'rxjs/operators';
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css'],
})
export class ToArrayComponent implements OnInit {
  users = [
    {name: 'Anum', skill: 'Angular'},
    {name: 'Shekhar', skill: 'Html, Css'},
    {name: 'UXtrendz', skill: 'TypeScript'}
  ]
  constructor() {}
  sourceSub: Subscription;
  ngOnInit(): void {
    const source = interval(1000);

    this.sourceSub = source.pipe(take(5),toArray()).subscribe((res) => {
      console.log(res);
    });
    // ! object to Array using toArray() operator
  
    const source3 = of("abid","sahid");
    source3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
    // ! object to string using toArray() operator
    const dataArray = from(this.users);
    dataArray.pipe(toArray()).subscribe((res) => {
      console.log(res);
    }); 
  }
}
