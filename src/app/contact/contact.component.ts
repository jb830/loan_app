/*
============================================
; Title:  contact.component.ts
; Author: Professor Krasso
; Date: 6. May, 2024
; Modified by: Joanna Brumfield
; Description: contact Component
;===========================================
*/
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
