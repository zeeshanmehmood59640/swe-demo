import { Route } from '@angular/router';
import { Home } from '@swe-demo/swe-demo-app-feature';

export const appRoutes: Route[] = [
    {path:' ',component: Home},
    {path:'about',component: Home},
    {path:'contact',component: Home},
];
