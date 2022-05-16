import { Activity } from "../entities/activity.model";
import { Destination } from "../entities/destination.model";

export interface DestinationByIdResponse {
  destination: Destination;
  activities: Activity[];
}
