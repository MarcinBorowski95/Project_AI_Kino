import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
    {path: "" , loadChildren: 'app/home/home.module#HomeModule'} ,
    {path: "login" , loadChildren: 'app/login/login.module#LoginModule'} ,
    {path: "register" , loadChildren: 'app/register/register.module#RegisterModule'},
    {path: "repertoire" , loadChildren: 'app/repertoire/repertoire.module#RepertoireModule'},
    {path: "priceList" , loadChildren: 'app/priceList/priceList.module#PriceListModule'},
    {path: "movies" , loadChildren: 'app/movies/movies.module#MoviesModule'},
    {path: "**" , redirectTo: "/" }
    
  ];

export const Routing = RouterModule.forRoot(routes);

