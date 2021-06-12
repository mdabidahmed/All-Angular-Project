import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  title = 'pipes';
  name = '';
  val1 = 'From';
  val2 = 'To';
  searchValue: string = '';
  convertFromTo: any;
  inputVal;
  convertParaFrom;
  convertParaTo;
  inputFieldValue: string;
  ngOnInit() {}
  onNameChange(value: string) {
    this.name = value;
    console.log(this.name);
  }
  changeInFrom(val) {
    this.inputFieldValue = this.searchInput.nativeElement.value = '';
    console.log('input', this.inputFieldValue);

    this.searchInput.nativeElement.value = '';
  }
  selectedFrom: any;
  selectedTo: any;
  onChanges(value) {
    console.log('inp', value);

    this.inputVal = value;
    console.log(value);
    if (
      this.selectedFrom === 'kilometer (km)' &&
      this.selectedTo == 'meter (m)'
    ) {
      this.convertParaFrom = this.selectedFrom;
      this.convertParaTo = this.selectedTo;
      this.convertFromTo = value * 1000;
    } else if (
      this.selectedFrom === 'meter (m)' &&
      this.selectedTo == 'meter (m)'
    ) {
      this.convertParaFrom = this.selectedFrom;
      this.convertParaTo = this.selectedTo;
      this.convertFromTo = value * 1;
    } else if (
      this.selectedFrom === 'centimeter (cm)' &&
      this.selectedTo == 'meter (m)'
    ) {
      this.convertParaFrom = this.selectedFrom;
      this.convertParaTo = this.selectedTo;
      this.convertFromTo = value * 0.01;
    } else if (
      this.selectedFrom === 'millimeter (mm)' &&
      this.selectedTo == 'meter (m)'
    ) {
      this.convertParaFrom = this.selectedFrom;
      this.convertParaTo = this.selectedTo;
      this.convertFromTo = value * 0.001;
    } else if (
      this.selectedFrom === 'kilometer (km)' &&
      this.selectedTo == 'kilometer (km)'
    ) {
      this.convertParaFrom = this.selectedFrom;
      this.convertParaTo = this.selectedTo;
      this.convertFromTo = value * 1;
    } else if (
      this.selectedFrom === 'meter (m)' &&
      this.selectedTo == 'kilometer (km)'
    ) {
      this.convertParaFrom = this.selectedFrom;
      this.convertParaTo = this.selectedTo;
      this.convertFromTo = value * 0.001;
    } else if (
      this.selectedFrom === 'centimeter (cm)' &&
      this.selectedTo == 'kilometer (km)'
    ) {
      this.convertParaFrom = this.selectedFrom;
      this.convertParaTo = this.selectedTo;
      this.convertFromTo = value * 0.00001;
    } else if (
      this.selectedFrom === 'millimeter (mm)' &&
      this.selectedTo == 'kilometer (km)'
    ) {
      this.convertParaFrom = this.selectedFrom;
      this.convertParaTo = this.selectedTo;
      this.convertFromTo = value * 0.000001;
    }
  }
  ConvertFrom = [
    { id: 1, name: 'kilometer (km)' },
    { id: 2, name: 'meter (m)' },
    { id: 3, name: 'centimeter (cm)' },
    { id: 4, name: 'millimeter (mm)' },
  ];

  ConvertTo = [
    { id: 1, name: 'kilometer (km)' },
    { id: 2, name: 'meter (m)' },
    { id: 3, name: 'centimeter (cm)' },
    { id: 4, name: 'millimeter (mm)' },
  ];
}
