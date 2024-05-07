/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date: 6. May, 2024
; Modified by: Joanna Brumfield
; Description: home Component
;===========================================
*/
import {
  Component
} from '@angular/core';
import {
  MatButtonModule
} from '@angular/material/button';
import {
  MatCardModule
} from '@angular/material/card';
import {
  RouterOutlet,
  RouterModule
} from '@angular/router';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatInputModule
} from '@angular/material/input';
import {
  MatListModule
} from '@angular/material/list';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroupName
} from '@angular/forms';
import {} from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    RouterOutlet,
    RouterModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {

}
