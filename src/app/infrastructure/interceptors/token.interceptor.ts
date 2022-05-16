import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authenticatedRequest = req;

    const token = localStorage.getItem("token");
    if (token) {
      authenticatedRequest = req.clone({
        headers: req.headers.set("Authorization", `bearer ${token}`),
      });
    }

    return next.handle(authenticatedRequest);
  }
}
