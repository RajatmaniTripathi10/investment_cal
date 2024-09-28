import { Component, inject, Input } from '@angular/core';
import { InvestmentService } from '../service/investment.service';

@Component({
  selector: 'app-investment-result',
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
private investService=inject(InvestmentService);
get results(){
  return this.investService.resultsData;
}
}
