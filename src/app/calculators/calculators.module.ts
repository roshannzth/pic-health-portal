import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { BmiCalculatorComponent } from './components/bmi-calculator/bmi-calculator.component';
import { CalculatorDashboardComponent } from './components/calculator-dashboard/calculator-dashboard.component';


@NgModule({
  declarations: [
    BmiCalculatorComponent,
    CalculatorDashboardComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule
  ]
})
export class CalculatorsModule { }
