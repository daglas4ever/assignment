import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PrintManagementModule } from './modules/print-management/print-management.module';
import { TokenInterceptor } from './infrastructure/interceptors/token.interceptor';
import { AuthorizationGuard } from './infrastructure/guards/authorization.guard';
import { MainLayoutComponent } from './infrastructure/Layout/main-layout.component';
import { BreadCrumbsComponent } from './infrastructure/Layout/bread-crumbs.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    BreadCrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PrintManagementModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),

    // required animations module
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      maxOpened: 3,
      progressBar: true,
      enableHtml: true,
      positionClass: 'toast-top-right',
      closeButton: true
    }) // ToastrModule added

  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    },
    AuthorizationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
