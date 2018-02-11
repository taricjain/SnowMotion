import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { 
  MatCardModule, 
  MatButtonModule, 
  MatToolbarModule, 
  MatIconModule, 
  MatInputModule, 
  MatFormFieldModule, 
  MatTabsModule, 
  MatGridListModule, 
  MatExpansionModule, 
  MatDialogModule } from '@angular/material';
import { DetailsComponent } from '../details/details.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule
  ],
  exports: [
    MatCardModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatTabsModule, 
    MatGridListModule, 
    MatExpansionModule, 
    MatDialogModule],
    entryComponents: [DetailsComponent],
  declarations: []
})
export class MaterialModule { }
