import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


import { ReloadRequestModalComponent } from 'src/app/shared/modals/reload-request-modal/reload-request-modal.component';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  movieList: any = [];

  searchChanged: Subject<string> = new Subject<string>();
  filteredMovieList: any = [];
  searchStr = '';

  nextPageUrl: any = null;
  prevPageUrl: any = null;

  constructor(public dialog: MatDialog, private _dataService: DataService) { }

  ngOnInit(): void {
    this.searchChanged.pipe(
      debounceTime(250)).subscribe((keyword: string) => this.updateFilteredList(keyword));

    this.getMovieList();
  }

  getMovieList() {
    this.updateMovieList('https://demo.credy.in/api/v1/maya/movies/');
  }

  getNextPage() {
    this.updateMovieList(this.nextPageUrl);
  }

  updateMovieList(url: any) {
    this._dataService.showloader();
    this._dataService.getListAbsUrl(url).subscribe((res: any) => {
      console.log(res);
      this._dataService.hideloader();
      if (res.results) {
        this.movieList.push(...res.results);
        console.log(this.movieList);
        this.nextPageUrl = res.next;
        this.prevPageUrl = res.previous;
      } else {

      }
      this.searchItem(this.searchStr);
    }, Error => {
      this._dataService.hideloader();
      // console.log('Err is ', Error);
      this.viewErrorModal(Error);
    });
  }

  viewErrorModal(error: any): void {
    const dialogRef = this.dialog.open(ReloadRequestModalComponent, {
      data: { error: error }
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result?.refresh) {
        this.updateMovieList(result.url);
      }
    });
  }

  onScrollDown() {
    console.log('scrolled', this.nextPageUrl);
    if (this.nextPageUrl) {
      this.getNextPage();
    }
  }

  updateFilteredList(keyword: string) {
    if (keyword.length > 2) {
      this.filteredMovieList = this._filter(keyword);
    } else {
      this.filteredMovieList = this.movieList;
    }
  }

  searchItem(text: string) {
    this.searchStr = text;
    this.searchChanged.next(text);
  }


  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.movieList.filter((movie: { title: string; }) => movie.title.toLowerCase().includes(filterValue));
  }

}
