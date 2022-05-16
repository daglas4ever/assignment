import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { SearchTypes } from "../../types";
import { DestinationListResponse } from "../../models/api-responses/destinations-list-response.model";
import { DestinationByIdResponse } from "../../models/api-responses/destination-by-id-response.model";
@Injectable({
  providedIn: "root",
})
export class TopFiveApiService {
  constructor(private http: HttpClient) {}

  getDestinationList(params: DestinationListSearchParameters) {
    return this.http.get<DestinationListResponse>(
      `${environment.baseBackendUrl}top_five/destinations`,
      {
        params: {
          search_type: params.search_type || "",
          search_value: params.search_value || "",
        },
      }
    );
  }

  getDestinationById(id: number) {
    return this.http.get<DestinationByIdResponse>(
      `${environment.baseBackendUrl}top_five/destination?id=${id}`
    );
  }
}

export interface DestinationListSearchParameters {
  search_type?: SearchTypes;
  search_value?: string;
}
