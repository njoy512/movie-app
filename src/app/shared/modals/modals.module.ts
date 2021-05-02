import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsModalComponent } from './movie-details-modal/movie-details-modal.component';
import { ReloadRequestModalComponent } from './reload-request-modal/reload-request-modal.component';



@NgModule({
  declarations: [
    MovieDetailsModalComponent,
    ReloadRequestModalComponent
  ],
  imports: [
    CommonModule
  ],
  entryComponents: [
    MovieDetailsModalComponent,
    ReloadRequestModalComponent
  ]
})
export class ModalsModule { }
