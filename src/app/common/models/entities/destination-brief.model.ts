/** this interface represents a short destination model */
export interface DestinationBrief {
  id: number;
  city: string;
  airport_name: string;
  country_name: string;
  country_code: string;
  top_fives_new_flag: number;
  top_fives_updated_flag: number;
  image_url: string;
}
