import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PrintLayoutComponent } from "./modules/print-management/print-layout/print-layout.component";
import { AuthorizationGuard } from "./infrastructure/guards/authorization.guard";
import { MainLayoutComponent } from "./infrastructure/Layout/main-layout.component";
import { Breadcrumb } from "./infrastructure/Layout/bread-crumbs.component";

const routes: Routes = [
  {
    path: "print",
    outlet: "print",
    component: PrintLayoutComponent,
    loadChildren: () =>
      import("./modules/print-management/print-management.module").then(
        (e) => e.PrintManagementModule
      ),
  },
  {
    path: "",
    component: MainLayoutComponent,
    children: [
      {
        path: "sample",
        loadChildren: () =>
          import("./modules/sample-management/sample.module").then(
            (e) => e.SampleModule
          ),
        canActivate: [AuthorizationGuard],
        data: {
          roles: [],
          breadcrumbTranslateKey: "home",
        },
      },
      {
        path: "",
        loadChildren: () =>
          import("./modules/destinations/destinations.module").then(
            (e) => e.DestinationsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: "reload" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
