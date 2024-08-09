import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class IgnoreSelfSignedCertificateInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('https://localhost')) {
            const newReq = req.clone({
                url: req.url.replace('https://', 'http://')
            });
            return next.handle(newReq);
        }
        return next.handle(req);
    }
}
