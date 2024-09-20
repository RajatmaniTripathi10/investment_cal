import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentData } from '../calculate.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'] // corrected 'styleUrl' to 'styleUrls'
})
export class UserComponent {
  @Output() calculate = new EventEmitter<InvestmentData>();

  initialInvestment!: number;
  annualInvestment!: number;
  expectedReturn!: number;
  duration!: number;

  onSubmit() {
    const investmentData = new InvestmentData(
      this.initialInvestment,
      this.duration,
      this.annualInvestment,
      this.expectedReturn
    );
    this.calculate.emit(investmentData);
  }
}