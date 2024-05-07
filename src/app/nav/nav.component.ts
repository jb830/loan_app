/*
============================================
; Title:  nav.component.ts
; Author: Professor Krasso
; Date: 6. May, 2024
; Modified by: Joanna Brumfield
; Description: nav Component
;===========================================
*/
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterModule,
    ContactComponent,
    AboutComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
