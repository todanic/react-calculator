import React from 'react';
import { useSharedState } from '../context/Context';
import Layout from '../Layouts/Layout';

export default function Results() {
  const { income, frequency, calculationType } = useSharedState();

  const columns = [
    { id: 0, name: 'freaguancy' },
    { id: 1, name: 'gross income' },
    { id: 2, name: 'tax' },
    { id: 3, name: 'net income' }
  ];
  const rows = [
    { id: 0, name: 'weekly', tax: 1000 },
    { id: 1, name: 'fortnighly', tax: 2000 },
    { id: 2, name: 'monthly', tax: 4000 },
    { id: 3, name: 'annually', tax: 48000 }
  ];

  return (
    <Layout>
      <h2>
        Your {frequency} {calculationType === 'gross' ? 'net' : 'gross'} income is{' '}
      </h2>
      <table className="w-full mt-10">
        <thead className="bg-gray-50 dark:bg-primary text-left">
          <tr>
            {columns.map((column) => (
              <th
                className="capitalize p-5 text-gray-900 dark:text-primary font-bold tracking-2 text-lg"
                key={column.id}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const grossIncome = row.name === 'annually' ? income - row.tax : income;
            const netIncome = income - row.tax;

            return (
              <tr key={row.id} className="odd:bg-gray-50 dark:odd:bg-primary">
                <td className="p-5">{row.name}</td>
                <td className="p-5">{grossIncome}</td>
                <td className="p-5">{row.tax}</td>
                <td className="p-5">{netIncome}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}
