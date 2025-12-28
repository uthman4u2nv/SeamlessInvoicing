import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout.component';
import { AuthSigninComponent } from './auth/auth-pages/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './auth/auth-pages/auth-signup/auth-signup.component';
import { AuthPassResetComponent } from './auth/auth-pages/auth-pass-reset/auth-pass-reset.component';
import { AuthLockscreenComponent } from './auth/auth-pages/auth-lockscreen/auth-lockscreen.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        loadChildren: () =>
            import('./layouts/layout.route').then((mod) => mod.PAGE_ROUTES),
    },
    {
        path: 'auth',
        component: AuthComponent,
        loadChildren: () =>
            import('./auth/auth.route').then((mod) => mod.AUTH_ROUTES),
    },
];
