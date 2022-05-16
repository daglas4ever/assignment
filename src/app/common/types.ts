export type SupportedLanguages = "en-UK" | "ar-JO";
export type SupportedDirections = "rtl" | "ltr";
export interface Culture {
  Lang: SupportedLanguages;
  Direction: SupportedDirections;
}

export type SearchTypes = "none" | "city" | "country" | "city_or_country";
