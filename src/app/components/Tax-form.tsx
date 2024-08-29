'use client';

import { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import styled from 'styled-components';

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
        <StyledInput
          type="text"
          value={income}
          onChange={(e) => setIncome(formatNumberWithCommas(e.target.value))}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Rent Income</label>
        <StyledInput
          type="text"
          value={rentIncome}
          onChange={(e) => setRentIncome(formatNumberWithCommas(e.target.value))}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Solar Panel Cost</label>
        <StyledInput
          type="text"
          value={solarPanelCost}
          onChange={(e) => setSolarPanelCost(formatNumberWithCommas(e.target.value))}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Gains from Investment</label>
        <StyledInput
          type="text"
          value={gainsFromInvestment}
          onChange={(e) => setGainsFromInvestment(formatNumberWithCommas(e.target.value))}
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

const StyledInput = styled.input`
  margin-top: 0.25rem;
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  &:focus {
    outline: none;
    ring-color: #3b82f6;
    border-color: #3b82f6;
  }
`;
