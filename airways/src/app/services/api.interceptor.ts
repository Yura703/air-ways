import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.includes('api.travelpayouts.com')) {
            console.log('fds')
            const tokenReq = req.clone({
                headers: req.headers.set('X-Access-Token', '87ce13d373824fa9a73476fd2bcba858').set(
                    "Access-Control-Allow-Origin","*"
                ),
            })
            return next.handle(tokenReq);
        }

        else {
            return next.handle(req);
        }
        // Header add Access-Control-Allow-Origin "*"
        // Header add Access-Control-Allow-Headers "origin, content-type"
        // Header add Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"
    }
}
