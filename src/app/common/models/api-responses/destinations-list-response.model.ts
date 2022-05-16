import { DestinationBrief } from "../entities/destination-brief.model";

export interface DestinationListResponse {
  new_destinations: DestinationBrief[];
  updated_destinations: DestinationBrief[];
  destinations: DestinationBrief[];
}
