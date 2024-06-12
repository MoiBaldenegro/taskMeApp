import { Routes } from '@angular/router';
import { LabsComponent } from './pages/labs/labs.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'labs', component: LabsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
