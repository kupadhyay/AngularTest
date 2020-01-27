import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from './../guards/auth.guard';
export const HomeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                // loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'settings',
               // loadChildren: 'app/home/settings/settings.module#SettingsModule'
                loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
            },
            {
                path: 'products',
               // loadChildren: 'app/home/products/products.module#ProductsModule'
               loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
            },
            {
               path: 'orderPizza',
               loadChildren: () => import('./order-pizza/order-pizza.module').then(m => m.OrderPizzaModule)
            }
        ]
    }
];
