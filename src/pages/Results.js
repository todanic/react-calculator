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
      <table className="w-full mt-10 shadow-light dark:shadow-dark">
        <thead className="bg-gray-50  text-left">
          <tr>
            {columns.map((column) => (
              <th
                className="capitalize p-6 text-gray-900 dark:text-primary dark:bg-gray-900 font-bold tracking-2 text-lg"
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
              <tr
                key={row.id}
                className="tracking-2 odd:bg-gray-900 dark:odd:bg-white dark:odd:text-gray-900  odd:text-white dark:text-white capitalize">
                <td className="p-6 dark:text-primary font-bold">{row.name}</td>
                <td className="p-6">{grossIncome}</td>
                <td className="p-6">{row.tax}</td>
                <td className="p-6">{netIncome}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}
