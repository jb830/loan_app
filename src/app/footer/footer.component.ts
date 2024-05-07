/*
============================================
; Title:  footer.component.ts
; Author: Professor Krasso
; Date: 6. May, 2024
; Modified by: Joanna Brumfield
; Description: footer Component
;===========================================
*/
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';
import { Router } from 'express';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterModule,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
