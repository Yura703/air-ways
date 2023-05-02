import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.includes('api.travelpayouts.com')) {
            console.log('fds')
            const tokenReq = req.clone({
                headers: req.headers.set(
                    'X-Auth-Token', 'user:1407172832672:a334564e7dd50848bc20f8984a152f77'
                ),
            })
            return next.handle(tokenReq);
        }

        else {
            return next.handle(req);
        }
    }
}
