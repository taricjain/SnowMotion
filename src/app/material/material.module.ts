import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatGridListModule, MatExpansionModule } from '@angular/material';

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
    MatExpansionModule
  ],
  exports: [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatGridListModule, MatExpansionModule],
  declarations: []
})
export class MaterialModule { }
