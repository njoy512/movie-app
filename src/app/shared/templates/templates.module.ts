import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './header/header.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { SearchBoxComponent } from './search-box/search-box.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MovieCardComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    FormsModule
  ],
  exports: [
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatIconModule,
    MatDialogModule,
    HeaderComponent,
    MovieCardComponent,
    SearchBoxComponent
  ]
})
export class TemplatesModule { }
