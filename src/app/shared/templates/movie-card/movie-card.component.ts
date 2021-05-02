import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsModalComponent } from '../../modals/movie-details-modal/movie-details-modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  @Input() movieDetails: any;

  name = '';
  nameUrl = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.name = this.movieDetails.title;
    // console.log(this.movieDetails);
    this.name.replace(/\s/g, '+');
    this.nameUrl = 'https://ui-avatars.com/api/?background=random&name=' + this.name;
  }

  viewDetailsModal(): void {
    const dialogRef = this.dialog.open(MovieDetailsModalComponent, {
      data: { movieDetails: this.movieDetails },
    });

    dialogRef.afterClosed().subscribe((result: any) => {

    });
  }

}
