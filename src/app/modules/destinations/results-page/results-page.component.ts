import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Destination } from "src/app/common/models/entities/destination.model";
import { TopFiveApiService } from "src/app/common/services/apis/top-five-api.service";
import { MainLayoutService } from "src/app/common/services/main-layout.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-results-page",
  templateUrl: "./results-page.component.html",
  styleUrls: ["./results-page.component.scss"],
})
export class ResultsPageComponent implements OnInit, OnDestroy {
  destination: Destination = {} as any;
  notFoundFlag: boolean = false;
  constructor(
    private mainLayoutService: MainLayoutService,
    private activatedRoute: ActivatedRoute,
    private topFiveService: TopFiveApiService,
    private router: Router
  ) {
    this.mainLayoutService.showSearchComponent();
  }

  ngOnInit(): void {
    const id = this.extractIdFromSlugParam();

    if (id) {
      this.loadDestination(Number(id));
    }
  }

  ngOnDestroy(): void {
    this.mainLayoutService.reset();
  }

  private extractIdFromSlugParam() {
    const slug = this.activatedRoute.snapshot.params.slug as string;
    const slugSplits = slug?.split("_");
    if (slugSplits && slugSplits.length > 0) {
      const id = slugSplits[0];
      return id;
    }
    return null;
  }

  async loadDestination(id: number) {
    await this.topFiveService.getDestinationById(id).subscribe({
      next: (response) => {
        this.destination = response.destination;

        this.mainLayoutService.setBackgroundImageUrl(
          this.destination.thumbnail.image_url
        );
      },
      error: (error) => {
        this.notFoundFlag = true;
        return;
      },
    });
  }

  luckyTripBtn(id: number) {
    // Swal.fire("Lucky Trip", "You clicked the lucky trip button!", "info");
    // just some very random lucky trip implementation
    this.router.navigateByUrl("/", { skipLocationChange: true }).then(() => {
      this.router.navigate(["/destination/", id]).then((_) => {
        window.scrollTo(0, 0);
      });
    });
  }
}
