import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}
  handleError(err: HttpErrorResponse) {
    console.log(err);
    let errMsg = '';
    if (!err.error || !err.error.error) {
      console.log('Network error');
      errMsg = 'This is some UnKnown Error. Please Try again After Some Time';
    } else {
      if (err.error.error == 'Permission denied') {
        errMsg = "You don't have permission to access this content";
      }
    }
    return throwError(errMsg);
  }
}
