import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, pluck, switchMap } from 'rxjs/operators';
import { Search } from 'src/app/appInterface/search.interface';
import { SearchserviceService } from 'src/app/appService/searchservice.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css'],
})
export class SwitchmapComponent implements AfterViewInit {
 
  @ViewChild('searchForm') searchForm: NgForm;
  searchResults: Search;
  searchResultCount:any;
  error;
  constructor(private _searchService: SearchserviceService) {}


  ngAfterViewInit(): void {
 
    const formValue = this.searchForm.valueChanges;
    formValue
      .pipe(
        // map(data=> data['searchTerm']) or
        // map(data=> data.searchTerm) or
        filter(()=>this.searchForm.valid),

        pluck('searchTerm'),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((data)=>
         
          this._searchService.getSearches(data)
        )
      )
      .subscribe((res) => {
        this.searchResults = res;
        this.searchResultCount = Object.keys(res).length;
      },(err)=>{
        this.error = err;
      });
  }
}
