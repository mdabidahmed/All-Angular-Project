import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css'],
})
export class PromiseComponent implements OnInit {
  constructor() {}
  DellAvailable() {
    return true;
  }
  HpAvailable() {
    return false;
  }

  dell = {
    brand: 'Dell',
    harddisk: '1tb',
    color: 'black',
  };

  hp = {
    brand: 'hp',
    harddisk: '2tb',
    color: 'blue',
  };
  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.DellAvailable()) {
        return setTimeout(() => {
          resolve(this.dell);
        }, 3000);
      } else if (this.HpAvailable()) {
        return setTimeout(() => {
          resolve(this.dell);
        }, 3000);
      } else {
        return setTimeout(() => {
          reject('Laptop is not available on store');
        }, 3000);
      }
    });
    buyLaptop
      .then((res) => {
        console.log('then code =>', res);
      })
      .catch((res) => {
        console.log('error!!!!', res);
      });
  }
}
