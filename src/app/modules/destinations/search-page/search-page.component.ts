import { Component, OnInit } from "@angular/core";
import { DestinationListResponse } from "src/app/common/models/api-responses/destinations-list-response.model";
import { DestinationBrief } from "src/app/common/models/entities/destination-brief.model";
import { MainLayoutService } from "src/app/common/services/main-layout.service";

@Component({
  selector: "app-search-page",
  templateUrl: "./search-page.component.html",
  styleUrls: ["./search-page.component.scss"],
})
export class SearchPageComponent implements OnInit {
  destinations: DestinationBrief[] = [];

  constructor(private mainLayoutService: MainLayoutService) {}

  ngOnInit(): void {
    this.mainLayoutService.hideSearchComponent();
  }

  updateData(data: DestinationListResponse) {
    this.destinations = data.destinations;
  }
}
