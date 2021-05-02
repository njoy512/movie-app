import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss']
})
export class MovieDetailsModalComponent implements OnInit {

  movieDetails: any;
  name = '';
  nameUrl = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MovieDetailsModalComponent>) { }

  ngOnInit(): void {
    this.movieDetails = this.data.movieDetails;
    console.log(this.movieDetails);
    this.name = this.movieDetails.title;
    // console.log(this.movieDetails);
    this.name.replace(/\s/g, '+');
    this.nameUrl = 'https://ui-avatars.com/api/?background=random&size=112&name=' + this.name;
  }

  // Close dailog
  onNoClick(): void {
    this.dialogRef.close();
  }

}
