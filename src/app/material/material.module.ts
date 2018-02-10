import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule
  ],
  exports: [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatSidenavModule],
  declarations: []
})
export class MaterialModule { }
