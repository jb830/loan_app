/*
============================================
; Title:  base-layout.component.ts
; Author: Professor Krasso
; Date: 6. May, 2024
; Modified by: Joanna Brumfield
; Description: Base Layout Component
;===========================================
*/
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-base-layout',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    NavComponent,
    FooterComponent,
    NotFoundComponent
  ],
  templateUrl: './base-layout.component.html',
  styleUrl: './base-layout.component.scss'
})
export class BaseLayoutComponent {

}
