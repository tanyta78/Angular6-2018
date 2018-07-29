import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { LoginFormComponent } from './authentication/login-form/login-form.component';
import { RegisterFormComponent } from './authentication/register-form/register-form.component';
import { HomeComponent } from './home/home.component'
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
	{path:'', pathMatch:'full', redirectTo:'home'},
	{ path: 'home', component: HomeComponent , canActivate:[AuthGuardGuard]},
	{ path: 'login', component: LoginFormComponent },
	{ path: 'register', component: RegisterFormComponent }

]

let appRouterModule: ModuleWithProviders = RouterModule.forRoot(routes);

export default appRouterModule;

//same as above
// @NgModule({
// 	imports:[RouterModule.forRoot(routes)],
// 	exports:[RouterModule]
// })export class AppRouterModule{}