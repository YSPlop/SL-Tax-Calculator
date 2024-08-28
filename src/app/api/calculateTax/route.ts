import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { income, rentIncome, solarPanelCost, gainsFromInvestment, bettingAndGaming } = await request.json();
  
  // Reliefs
  const personalRelief = 1200000;
  const rentRelief = rentIncome * 0.25;
  const solarPanelRelief = solarPanelCost > 600000 ? 600000 : solarPanelCost;
  let totalRelief = personalRelief + rentRelief + solarPanelRelief;

  // Calculate taxable income
  let taxableIncome = income - totalRelief;
  if (bettingAndGaming) {
    taxableIncome *= 1.4;  // Apply higher tax for gaming income
  }

  let tax = 0;
  if (taxableIncome > 0) {
    const brackets = [500000, 500000, 500000, 500000, 500000];
    const rates = [0.06, 0.12, 0.18, 0.24, 0.3];
    for (let i = 0; i < brackets.length; i++) {
      const amount = Math.min(taxableIncome, brackets[i]);
      tax += amount * rates[i];
      taxableIncome -= amount;
      if (taxableIncome <= 0) break;
    }
    if (taxableIncome > 0) {
      tax += taxableIncome * 0.36;
    }
  }

  // Gains from investment assets (10% tax rate)
  const investmentTax = gainsFromInvestment * 0.1;
  tax += investmentTax;

  return NextResponse.json({ tax, totalRelief });
}
