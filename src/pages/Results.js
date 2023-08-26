import React from 'react';
import { useSharedState } from '../context/TabContext';

export default function Results() {
  const { income, frequency, calculationType } = useSharedState();
  const columns = ['freaguancy', 'gross income', 'tax', 'net income'];

  const generateTaxes = () => {
    return Array.from({ length: 4 }, () => Math.floor(Math.random() * (50000 - 1000 + 1)) + 1000);
  };

  const taxes = generateTaxes();

  return (
    <div>
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-r border-gray-300">{frequency}</td>
            <td className="border-r border-gray-300">{income}</td>
            <td className="border-r border-gray-300">{taxes.join(', ')}</td>
            <td className="border-r border-gray-300">Net Income Calculation</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
