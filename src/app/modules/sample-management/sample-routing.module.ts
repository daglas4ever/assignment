import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SampleComponent } from "./sample.component";

const routes: Routes = [
  {
    path: "sample",
    component: SampleComponent,
    children: [
      {
        path: "breadcrumbstest",
        component: SampleComponent,
        data: {
          roles: [],
          breadcrumbTranslateKey: "sample",
        },
      },
    ],
    data: {
      roles: [],
      breadcrumbTranslateKey: "breadcrumbSample",
    },
  },
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forChild(
  routes
);
