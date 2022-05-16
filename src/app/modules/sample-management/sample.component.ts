import {
  Component,
  OnInit,
  ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__,
} from "@angular/core";
import { CultureService } from "src/app/common/services/culture.service";
import Swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import { TopFiveApiService } from "../../common/services/apis/top-five-api.service";

@Component({
  selector: "app-sample",
  template: `
    <h1 class="alert alert-info">{{ "howAreYouDoing" | translate }}</h1>
    <div class="container">
      <span class="pull-right"> hope you are doing great</span>
    </div>
    <button class="btn btn-primary" (click)="toggleDirection()">
      {{ "hello" | translate }}
    </button>
  `,
  styles: [``],
})
export class SampleComponent {
  constructor(
    private languageAndDirectionService: CultureService,
    private toastrService: ToastrService,
    private topFiveService: TopFiveApiService
  ) {}

  toggleDirection() {
    this.languageAndDirectionService.toggleCultureEnAr();

    Swal.fire({
      title: "<h1>Direction has Changed</h1>",
      text: "psst: so did the language",
      type: "success",
    });

    this.toastrService.info("good job", "am amazed that you noticed me");
    this.topFiveService.getDestinationById(63).subscribe((res) => {
      console.info(res);
    });
    this.topFiveService
      .getDestinationList({ search_type: null, search_value: null })
      .subscribe((res) => {
        console.info(res);
      });
  }
}
