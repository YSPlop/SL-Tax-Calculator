'use client';

import { useState } from 'react';
import TaxForm from './components/Tax-form';
import Results from './components/Results';
import { motion } from 'framer-motion';

export default function Home() {
  const [tax, setTax] = useState<number | null>(null);
  const [relief, setRelief] = useState<number | null>(null);

  const handleCalculate = async (data: { income: number; rentIncome: number; solarPanelCost: number; gainsFromInvestment: number; bettingAndGaming: boolean }) => {
    const response = await fetch('/api/calculateTax', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    setTax(result.tax);
    setRelief(result.totalRelief);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg"
      >
        <h1 className="text-4xl font-bold text-center mb-6">Tax Calculator</h1>
        <TaxForm onSubmit={handleCalculate} />
        <Results tax={tax} relief={relief} />
      </motion.div>
    </div>
  );
}
