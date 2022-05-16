import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MainLayoutService {
  private readonly defaultBackgroundImageUrl =
    "/assets/icons/search_background.png";
  private readonly defaultIsSearchComponentHidden = true;

  backgroundImageUrlSubject = new BehaviorSubject<string>(
    this.defaultBackgroundImageUrl
  );

  searchComponentHiddenSubject = new BehaviorSubject<boolean>(
    this.defaultIsSearchComponentHidden
  );

  backgroundImageUrl$ = this.backgroundImageUrlSubject.asObservable();
  searchComponentHidden$ = this.searchComponentHiddenSubject.asObservable();

  constructor() {}

  setBackgroundImageUrl(newBackgroundUrl: string) {
    this.backgroundImageUrlSubject.next(newBackgroundUrl);
  }

  hideSearchComponent() {
    this.searchComponentHiddenSubject.next(true);
  }

  showSearchComponent() {
    this.searchComponentHiddenSubject.next(false);
  }

  reset() {
    this.backgroundImageUrlSubject.next(this.defaultBackgroundImageUrl);
    this.searchComponentHiddenSubject.next(this.defaultIsSearchComponentHidden);
  }
}
