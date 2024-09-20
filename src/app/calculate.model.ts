export class InvestmentData {
    constructor(
      public initialInvestment: number,
      public duration: number,
      public annualInvestment: number,
      public expectedReturn: number
    ) {}
  }