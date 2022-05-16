import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DestinationsRoutingModule } from "./destinations-routing.module";
import { SearchPageComponent } from "./search-page/search-page.component";
import { ResultsPageComponent } from "./results-page/results-page.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [SearchPageComponent, ResultsPageComponent],
  imports: [CommonModule, DestinationsRoutingModule, SharedModule],
})
export class DestinationsModule {}
