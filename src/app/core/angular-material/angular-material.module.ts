import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';

const materialModule = [MatAutocompleteModule, MatDialogModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...materialModule],
  exports: [...materialModule],
})
export class AngularMaterialModule {}
