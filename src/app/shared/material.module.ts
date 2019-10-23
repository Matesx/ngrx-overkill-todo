import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatCheckboxModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule

} from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
