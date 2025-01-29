import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from './auth.service';

export const AuthGuard: CanActivateFn = (
  _: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const url = state.url;
  const isAuthenticated = authService.isAuthenticated();

  if (url.startsWith('/auth') && isAuthenticated) {
    return router.createUrlTree(['/']);
  }

  if (url === '/' && !isAuthenticated) {
    return router.createUrlTree(['/auth/login']);
  }

  return true;
};
