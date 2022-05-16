import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrintManagementRoutingModule } from './print-management-routing.module';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PrintManagementRoutingModule,
    SharedModule
  ],
  declarations: [PrintLayoutComponent]
})
export class PrintManagementModule { }
