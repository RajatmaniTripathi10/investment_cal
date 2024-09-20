import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'investement_cal';
  resultsData!:{
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number
  }[]
  calculateInvestmentResults(
    data:{
      initialInvestment: number,
      duration: number,
      annualInvestment: number,
      expectedReturn: number
    }
    ){
      const {initialInvestment,duration,annualInvestment,expectedReturn}=data
      const annualData=[]
  
      let investmentValue = initialInvestment; // Start with the initial investment
    
      for (let i = 0; i < duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (expectedReturn / 100); 
        investmentValue += interestEarnedInYear + annualInvestment; 
    
        const totalInterest = investmentValue - annualInvestment * year - initialInvestment;
    
        // Push the year's data into the annualData array
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: initialInvestment + annualInvestment * year,
        });
      }
    
      this.resultsData=annualData
  }
}
