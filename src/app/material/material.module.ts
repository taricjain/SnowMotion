import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatSidenavModule, MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTabsModule,
    


  ],
  exports: [MatCardModule, MatButtonModule, MatToolbarModule, MatIconModule, MatInputModule, MatFormFieldModule, MatSidenavModule, MatTabsModule],
  declarations: []
})
export class MaterialModule { }
