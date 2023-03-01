import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from '@demo/auth-lib';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full',
      providers: [ AuthService ]
    },

    // Your route here:

    {
      path: 'flights',
      loadChildren: () => import('mfe1/Module').then(m => m.FlightsModule),
      providers: [ AuthService ]
    },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

