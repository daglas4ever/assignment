import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-bread-crumbs",
  template: `
    <nav aria-label="breadcrumb">
      <div class="container">
        <ol class="breadcrumb">
          <li
            class="breadcrumb-item"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            *ngFor="let crumb of breadcrumbs"
          >
            <a [routerLink]="crumb.url">
              {{ crumb.label | translate }}
            </a>
          </li>
        </ol>
      </div>
    </nav>
  `,
  styles: [
    `
      .active * {
        color: grey;
      }
    `,
  ],
})
export class BreadCrumbsComponent implements OnInit, OnDestroy {
  public breadCrumbsSubscription: Subscription;
  public breadcrumbs: Breadcrumb[];

  constructor(private router: Router, activatedRoute: ActivatedRoute) {
    this.breadCrumbsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // clear last route crumbs
        this.breadcrumbs = [];
        let route = activatedRoute.firstChild;
        do {
          const label = this.getLabel(route);

          const url = this.buildRouteUrl(route);

          this.breadcrumbs.push({ label, url } as Breadcrumb);

          // go to next child
          route = route.firstChild;
        } while (route);
      }
    });
  }

  private getLabel(route: ActivatedRoute): string {
    let label = route.snapshot.data.breadcrumbTranslateKey;

    // if no label found, gets the label from the routing url.
    if (!label) {
      const urlSegments = route.snapshot.url.map((e) => e.path);
      label = urlSegments[urlSegments.length - 1];
    }
    return label;
  }

  private buildRouteUrl(route: ActivatedRoute) {
    // build the url of the route.
    const currentChildUrlSegment = route.snapshot.url
      .map((e) => e.path)
      .join("/");

    const url =
      "/" +
      this.breadcrumbs.map((e) => e.url).join("/") +
      "/" +
      currentChildUrlSegment;

    return url;
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.breadCrumbsSubscription.unsubscribe();
  }
}

export interface Breadcrumb {
  label: string;
  url: string;
}
