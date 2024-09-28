import { Component, EventEmitter, Output } from '@angular/core';
import { InvestmentData } from '../calculate.model';
import { InvestmentService } from '../service/investment.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']

})
export class UserComponent {
  @Output() calculate = new EventEmitter<InvestmentData>();

  initialInvestment!: number;
  annualInvestment!: number;
  expectedReturn!: number;
  duration!: number;

  constructor(private investmentService:InvestmentService){}

  onSubmit() {
    const investmentData = new InvestmentData(
      this.initialInvestment,
      this.duration,
      this.annualInvestment,
      this.expectedReturn
    );
    this.investmentService.calculateInvestmentResults(investmentData)
  }
}