import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css'],
})
export class PluckComponent implements OnInit {
  constructor() {}
  users = [
    {
      name: 'Anup1',
      skills: 'Angular1',
      job: {
        title: 'Front-end',
        experience: '1 years',
      },
    },
    {
      name: 'Anup2',
      skills: 'Angular2',

      job: {
        title: 'Back-end',
        experience: '1 years',
      },
    },
    { name: 'Anup3', skills: 'Angular3' },
    { name: 'Anup4', skills: 'Angular4' },
  ];
  data;
  ngOnInit(): void {
    from(this.users)
      .pipe(pluck('job', 'title'), toArray())
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });
  }
}
