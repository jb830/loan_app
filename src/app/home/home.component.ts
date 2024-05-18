/*
============================================
; Title:  home.component.ts
; Author: Professor Krasso
; Date: 6. May, 2024
; Modified by: Joanna Brumfield
; Description: home Component
;===========================================
*/
import { Component } from '@angular/core';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatButton,
    MatCardModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

loanAmount: number = 0; 
interestRate: number = 0;
loanTerm: number = 0; 
monthlyPayment: number = 0;
monthlyInterest: number = 0;
totalInterest: number = 0;
err: string = '';

calculate() {
  let r = this.interestRate/100/12;
  let n = this.loanTerm*12;
  let P = this.loanAmount;

  //Monthly payment
  //A = P (r (1 + r)^n) / ((1 + r)^n – 1)
  this.monthlyPayment = parseFloat((P * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)).toFixed(2));  
  
  //Monthly interst
  this.monthlyInterest = parseFloat((this.monthlyPayment - (P / n)).toFixed(2));

  //Total interest
  this.totalInterest = parseFloat((this.monthlyInterest * n).toFixed(2));

  console.log('Monthly interest: ', this.monthlyInterest, 'Monthly payment ', this.monthlyPayment)

  //form error handling for negative/null values and interest rate value
  if(r <= 0 || this.interestRate >= 100 || P <= 0 || n <= 0 ) {
    this.err = "Please enter valid values";
    this.monthlyPayment = 0;
    this.monthlyInterest = 0;
    this.totalInterest = 0;
    return;
  }
  this.err = '';
  }
}
