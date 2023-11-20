import { Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {HomePageComponent} from "./home-page/home-page.component";

export const routes: Routes = [
  { path: 'home',
    component: HomePageComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  }
];

