import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}
  data = [
    { id: '1', name: 'Abid' },
    { id: '2', name: 'Parbej' },
    { id: '3', name: 'Alex' },
    { id: '4', name: 'Priyanka' },
    { id: '5', name: 'Sandeep' },
    { id: '6', name: 'Pooja' },
    { id: '7', name: 'Preety' },
    { id: '8', name: 'Sujatass' },
  ];
  data2 = [
    { id: '1', name: 'Abid', gender: 'male' },
    { id: '2', name: 'Parbej', gender: 'male' },
    { id: '3', name: 'Alex', gender: 'male' },
    { id: '4', name: 'Priyanka', gender: 'female' },
    { id: '5', name: 'Sandeep', gender: 'male' },
    { id: '6', name: 'Pooja', gender: 'female' },
    { id: '7', name: 'Preety', gender: 'female' },
    { id: '8', name: 'Sujit', gender: 'male' },
  ];
  data3 = [
    { id: '1', name: 'Abid', gender: 'male' },
    { id: '2', name: 'Parbej', gender: 'male' },
    { id: '3', name: 'Alex', gender: 'male' },
    { id: '4', name: 'Priyanka', gender: 'female' },
    { id: '5', name: 'Sandeep', gender: 'male' },
    { id: '6', name: 'Pooja', gender: 'female' },
    { id: '7', name: 'Preety', gender: 'female' },
    { id: '8', name: 'Sujit', gender: 'male' },
  ];
  items;
  item2;
  item3;
  ngOnInit(): void {
    from(this.data)
      .pipe(
        filter((item) => item.name.length > 4),
        toArray()
      )
      .subscribe((res) => {
        // console.log(res);
        this.items = res;
      });

    from(this.data2)
      .pipe(
        filter((val) => val.gender == 'male' && val.name.length >= 4),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.item2 = res;
      });

    from(this.data3)
      .pipe(
        filter((member) => {
          return member.id != ''
        }),
        toArray()
      )
      .subscribe((res) => {
        console.log(res);
        this.item3 = res;
      });
  }
}
