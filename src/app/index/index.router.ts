import { Route } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { ForgotComponent } from './forgot/forgot.component';
// import { SignupComponent } from './signup/signup.component';
import { IndexComponent } from './index.component';
import { LoginGuard } from './../guards/login.guard';

export const IndexRoutes: Route[] = [
    {
        path: '',
        component: IndexComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: 'login',
                // loadChildren: 'app/index/login/login.module#LoginModule'
                loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
            },
            {
                path: 'signup',
                // loadChildren: 'app/index/signup/signup.module#SignupModule'
                loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
            },
            {
                path: 'forgot',
                // loadChildren: 'app/index/forgot/forgot.module#ForgotModule'
                loadChildren: () => import('./forgot/forgot.module').then(m => m.ForgotModule)
            }
        ]
    }
];
