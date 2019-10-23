import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule

} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
