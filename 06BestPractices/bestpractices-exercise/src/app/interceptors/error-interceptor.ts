import {
	HttpResponse,
	HttpRequest,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

	constructor(
		private toastr: ToastrService,
		private router: Router) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(request)
			.pipe(catchError((err) => {
				
				switch (err.status) {
					case 401: this.toastr.error(err.error.message, "Warning!")
						break;
					case 400:
					const msg = Object.keys(err.error.errors)
					.map(e=> err.error.errors[e])
					.join('\n')
					this.toastr.error(msg,'Warning!')
						break;
				}

				return throwError(err);
			}))

	}
}