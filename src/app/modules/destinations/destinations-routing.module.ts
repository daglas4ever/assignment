import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultsPageComponent } from "./results-page/results-page.component";
import { SearchPageComponent } from "./search-page/search-page.component";

const routes: Routes = [
  {
    path: "destination/:slug",
    component: ResultsPageComponent,
  },
  {
    path: "search",
    component: SearchPageComponent,
  },
  {
    path: "",
    redirectTo: "/search",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationsRoutingModule {}
