import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const authorizedRoles = route.data.roles;

    if (!authorizedRoles || authorizedRoles.length === 0) {
      // if route has no roles restrictions, allow anyone
      return true;
    }

    const userRoles = this.getUserRoles();
    if (this.IsUserInRole(userRoles, authorizedRoles)) {
      return true;
    }

    return false;
  }

  private getUserRoles(): string[] {
    const roles = JSON.parse(localStorage.getItem('userRoles')) as string[]
    if (roles) {
      return roles;
    }
    return [];
  }

  private IsUserInRole(userRoles: string[], routeRoles: string[]): boolean {
    userRoles = userRoles.map(e => e.toLowerCase());
    routeRoles = routeRoles.map(e => e.toLowerCase());

    const rolesIntersection = userRoles.filter(e => routeRoles.includes(e));
    return rolesIntersection.length > 0;
  }

}
