import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { MenuItem } from 'primeng/api';

const primengModule = [
  InputTextModule,
  InputMaskModule,
  CalendarModule,
  InputTextareaModule,
  ButtonModule,
  MenubarModule,
  CardModule,
  MenuModule,
  TableModule,
  DropdownModule,
  // MenuItem
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...primengModule],
  exports: [...primengModule],
})
export class AngularPrimengModule {}
