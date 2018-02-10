import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputBase, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule],
  declarations: []
})
export class MaterialModule { }
