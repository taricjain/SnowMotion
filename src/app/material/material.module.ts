import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule
  ],
  exports: [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatTabsModule],
  declarations: []
})
export class MaterialModule { }
