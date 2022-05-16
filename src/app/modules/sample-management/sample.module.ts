import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SampleComponent } from './sample.component';
import { routing } from './sample-routing.module';


@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    routing
  ],
  exports: [],
  providers: [],
})
export class SampleModule { }
