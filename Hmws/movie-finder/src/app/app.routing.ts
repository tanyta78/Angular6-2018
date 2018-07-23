import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
	{ path: '', component: MoviesComponent },
	{ path: 'movie/:id', component: MovieComponent }

]

let appRouterModule: ModuleWithProviders = RouterModule.forRoot(routes);

export default appRouterModule;
