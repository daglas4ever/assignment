import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DestinationListResponse } from "src/app/common/models/api-responses/destinations-list-response.model";
import { DestinationBrief } from "src/app/common/models/entities/destination-brief.model";
import { TopFiveApiService } from "src/app/common/services/apis/top-five-api.service";

@Component({
  selector: "app-search-field",
  templateUrl: "./search-field.component.html",
  styleUrls: ["./search-field.component.scss"],
})
export class SearchFieldComponent implements OnInit {
  @Input("height") height: number = 35;
  @Input("mode") mode: "redirect" | "fetch" = "fetch";
  @Input("triggerInitialLoad") triggerInitialLoad = false;
  @Output("onDataFetch") onDataFetch: EventEmitter<DestinationListResponse> =
    new EventEmitter<DestinationListResponse>();

  searchValue: string = "";

  constructor(
    private topFiveApiService: TopFiveApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.readSearchValueQueryParam();
    if (this.triggerInitialLoad) {
      this.loadAndEmitData();
    }
  }

  public async submitSearchForm() {
    console.log("Submitted!, mode:" + this.mode);
    if (this.mode == "redirect") {
      this.redirectToSearchPage();
    } else {
      await this.loadAndEmitData();
    }
  }

  private readSearchValueQueryParam() {
    this.searchValue = this.activatedRoute.snapshot.queryParams.searchValue;
  }

  private redirectToSearchPage() {
    this.router.navigate(["/", "search"], {
      queryParams: {
        searchValue: this.searchValue,
      },
    });
  }

  private async loadAndEmitData() {
    const response = await this.topFiveApiService
      .getDestinationList({
        search_value: this.searchValue,
        search_type: "city_or_country",
      })
      .toPromise();

    this.onDataFetch.emit(response);
  }
}
