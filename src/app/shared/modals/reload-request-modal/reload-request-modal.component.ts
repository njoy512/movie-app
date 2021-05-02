import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reload-request-modal',
  templateUrl: './reload-request-modal.component.html',
  styleUrls: ['./reload-request-modal.component.scss']
})
export class ReloadRequestModalComponent implements OnInit {

  errorDetails: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ReloadRequestModalComponent>) { }

  ngOnInit(): void {
    console.log(this.data);
    this.errorDetails = this.data.error;
  }

  refresh() {
    this.dialogRef.close({ refresh: true, url: this.errorDetails.url });
  }

  // Close dailog
  onNoClick(): void {
    this.dialogRef.close();
  }

}
