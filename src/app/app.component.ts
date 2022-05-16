import { Component } from '@angular/core';
import { CultureService } from './common/services/culture.service';
import { templateJitUrl } from '@angular/compiler';
import { PrintService } from './modules/print-management/print.service';

@Component({
  selector: 'app-root',
  template: `
  <div [class.isPrinting]="printingService.isPrinting">
    <router-outlet></router-outlet>
    <router-outlet name="print"></router-outlet>
  </div>
  `,
  styles: []
})
export class AppComponent {


  // For more info about this template
  // please check out the README.MD in
  // this project.


  constructor(
    public cultureService: CultureService,
    public printingService: PrintService
  ) {

  }

}
