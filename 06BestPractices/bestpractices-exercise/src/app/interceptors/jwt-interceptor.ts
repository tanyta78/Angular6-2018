import {
	HttpResponse,
	HttpRequest,
	HttpEvent,
	HttpHandler,
	HttpInterceptor
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	constructor(private toastr: ToastrService, 
		private router: Router){}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		if (currentUser && currentUser.token)
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${currentUser.token}`
				}
			});

		return next.handle(request)
			.pipe(tap((res: any) => {
				if (res instanceof HttpResponse && res.body.token) {
					this.saveToken(res.body);
					this.toastr.success(res.body.message, "Successful ")
					this.router.navigate(['/furniture/all'])
				}

				if(res instanceof HttpResponse && res.body.success && res.url.endsWith('signup')){
					this.toastr.success(res.body.message, "Successful ")
					this.router.navigate(['/signin'])
				}

				if(res instanceof HttpResponse && res.body.success && res.url.endsWith('create')){
					this.toastr.success(res.body.message, "Successful ")
					this.router.navigate(['/furniture/all'])
				}

			}));
	}

	private saveToken(data) {
		localStorage.setItem('currentUser', JSON.stringify({ 
			"username": data.user.name,
			"token": data.token ,
			"isAdmin": data.user.isAdmin
		}));
	}
}