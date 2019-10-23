import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatCheckboxModule,

} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatCheckboxModule,
  ],
  exports: [
    MatCardModule,
    MatCheckboxModule,
  ]
})
export class MaterialModule { }
