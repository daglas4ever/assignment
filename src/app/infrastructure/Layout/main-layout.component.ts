import { Component, OnInit } from "@angular/core";
import { Breadcrumb } from "./bread-crumbs.component";
import { MainLayoutService } from "../../common/services/main-layout.service";
@Component({
  selector: "app-main-layout",
  templateUrl: "./main-layout.component.html",
  styleUrls: ["./main-layout.component.scss"],
})
export class MainLayoutComponent implements OnInit {
  headerRoutes: Breadcrumb[] = [
    // {
    //   label: 'sample',
    //   url: '/sample'
    // },
    // {
    //   label: 'breadcrumbSample',
    //   url: '/sample/breadcrumbstest'
    // }
  ];

  constructor(public mainLayoutService: MainLayoutService) {}

  ngOnInit(): void {}
}
