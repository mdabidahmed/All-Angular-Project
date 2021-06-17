import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Search } from '../appInterface/search.interface';
import { catchError } from 'rxjs/operators';
import { ErrorService } from './error.service';
@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {
url = 'https://my-json-server.typicode.com/mernstackdeveloper/api/videolist'
  constructor(private http: HttpClient, private _error: ErrorService) { }

  getSearches(searchTerm):Observable<Search>{
    return this.http.get<Search>(this.url+'?q='+searchTerm).pipe(catchError(this._error.handleError)); 
  }
}
