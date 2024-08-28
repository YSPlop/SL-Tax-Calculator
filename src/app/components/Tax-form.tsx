'use client';

import { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

interface TaxFormProps {
  onSubmit: (data: { income: number; rentIncome: number; solarPanelCost: number; gainsFromInvestment: number; bettingAndGaming: boolean }) => void;
}

const TaxForm: React.FC<TaxFormProps> = ({ onSubmit }) => {
  const [income, setIncome] = useState<string>('0');
  const [rentIncome, setRentIncome] = useState<string>('0');
  const [solarPanelCost, setSolarPanelCost] = useState<string>('0');
  const [gainsFromInvestment, setGainsFromInvestment] = useState<string>('0');
  const [bettingAndGaming, setBettingAndGaming] = useState<boolean>(false);

  const formatNumberWithCommas = (value: string) => {
    const number = parseFloat(value.replace(/,/g, ''));
    return isNaN(number) ? '' : number.toLocaleString();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      income: parseFloat(income.replace(/,/g, '')),
      rentIncome: parseFloat(rentIncome.replace(/,/g, '')),
      solarPanelCost: parseFloat(solarPanelCost.replace(/,/g, '')),
      gainsFromInvestment: parseFloat(gainsFromInvestment.replace(/,/g, '')),
      bettingAndGaming,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Income</label>
        <input
          type="text"
          value={income}
          onChange={(e) => setIncome(formatNumberWithCommas(e.target.value))}
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Rent Income</label>
        <input
          type="text"
          value={rentIncome}
          onChange={(e) => setRentIncome(formatNumberWithCommas(e.target.value))}
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Solar Panel Cost</label>
        <input
          type="text"
          value={solarPanelCost}
          onChange={(e) => setSolarPanelCost(formatNumberWithCommas(e.target.value))}
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Gains from Investment</label>
        <input
          type="text"
          value={gainsFromInvestment}
          onChange={(e) => setGainsFromInvestment(formatNumberWithCommas(e.target.value))}
          className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <ToggleSwitch
        label="Income from Betting and Gaming?"
        checked={bettingAndGaming}
        onChange={setBettingAndGaming}
      />

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Calculate Tax
      </button>
    </form>
  );
};

export default TaxForm;
