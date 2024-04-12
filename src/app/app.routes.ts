import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocalComponent } from './local/local.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'local', component: LocalComponent }
];
