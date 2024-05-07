/*
============================================
; Title:  app.routes.ts
; Author: Professor Krasso
; Date: 6. May, 2024
; Modified by: Joanna Brumfield
; Description: App Routes
;===========================================
*/

import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'; 
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [

  { 
    path: '', component: BaseLayoutComponent, 
    children: 
      [
      { 
        path: '', redirectTo: 'home', pathMatch: 'full' 
      },
      {
        path: 'home', component: HomeComponent
      },
      {
        path: 'contact', component: ContactComponent 
      },
      {
        path: 'about', component: AboutComponent 
      },
      { 
        path: 'not-found', component: NotFoundComponent 
      },
      {
        path: '**',
        redirectTo: 'not-found'
      },
    ]
  },

];
