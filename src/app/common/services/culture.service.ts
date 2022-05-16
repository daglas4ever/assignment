import { Injectable } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";
import { TranslateService } from "@ngx-translate/core";
import { Culture, SupportedDirections, SupportedLanguages } from "../types";

@Injectable({
  providedIn: "root",
})
export class CultureService {
  // #region [Cultures]
  ARABIC_CULTURE: Culture = {
    Lang: "ar-JO",
    Direction: "rtl",
  };

  ENGLISH_CULTURE: Culture = {
    Lang: "en-UK",
    Direction: "ltr",
  };

  private cultureLocalStorageKey = "culture";
  private culture = new BehaviorSubject<Culture>(this.ENGLISH_CULTURE);
  public culture$ = this.culture.asObservable();

  // #endregion

  constructor(private translateService: TranslateService) {
    this.listenToCultureChanges();
    this.setSavedCultureOrDefault();
  }

  private listenToCultureChanges() {
    this.culture$.subscribe((culture) => {
      this.translateService.use(culture.Lang);
      this.changeLayoutDirection(culture.Direction);
    });
  }

  public setCulture(culture: Culture) {
    this.cultureLocalStorage = culture;
    this.culture.next(culture);
    this.setLanguage(culture.Lang);
    this.setDirection(culture.Direction);
  }

  public toggleCultureEnAr(): void {
    const nextCulture = this.compareCultures(
      this.culture.value,
      this.ARABIC_CULTURE
    )
      ? this.ENGLISH_CULTURE
      : this.ARABIC_CULTURE;

    this.setCulture(nextCulture);
  }

  private setLanguage(language: SupportedLanguages): void {
    this.culture.next({
      ...this.culture.getValue(),
      Lang: language,
    });
  }

  private setDirection(dir: SupportedDirections): void {
    this.culture.next({
      ...this.culture.getValue(),
      Direction: dir,
    });
  }

  private compareCultures(obj1: Culture, obj2: Culture): boolean {
    return obj1.Direction === obj2.Direction && obj1.Lang === obj2.Lang;
  }

  private setSavedCultureOrDefault(): void {
    const culture = this.cultureLocalStorage;
    this.setLanguage(culture.Lang);
    this.setDirection(culture.Direction);
  }

  private changeLayoutDirection(direction: SupportedDirections): void {
    document.body.dir = direction;
    document.getElementsByTagName("html")[0].dir = direction;
  }

  private get cultureLocalStorage(): Culture {
    const culture = localStorage.getItem(this.cultureLocalStorageKey);
    if (culture && culture.length > 2) {
      return JSON.parse(culture);
    }
    return this.culture.getValue();
  }

  private set cultureLocalStorage(culture: Culture) {
    localStorage.setItem(this.cultureLocalStorageKey, JSON.stringify(culture));
  }
}
