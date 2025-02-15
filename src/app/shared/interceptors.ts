import {
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptorFn,
} from '@angular/common/http';
import { timeout } from 'rxjs';
import { REQUEST_TIMEOUT } from './constants';

export const timeoutInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  return next(req).pipe(timeout(REQUEST_TIMEOUT));
};
