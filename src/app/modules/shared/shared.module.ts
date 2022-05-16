import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { HttpClientModule } from "@angular/common/http";
import { SearchFieldComponent } from "./components/search-field/search-field.component";
import { LuckyTripButtonComponent } from "./components/lucky-trip-button/lucky-trip-button.component";

@NgModule({
  declarations: [SearchFieldComponent, LuckyTripButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    HttpClientModule,
  ],
  exports: [
    // imports
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    HttpClientModule,

    // non-imports
    TranslateModule,
    SearchFieldComponent,
    LuckyTripButtonComponent,
  ],
})
export class SharedModule {}
