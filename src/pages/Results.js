import React from 'react';
import { useFormSharedState } from '../context/FormContext';
import Layout from '../layouts/Layout';
import { columns } from '../const';
import { calculateRows, getIsGross, getSelectedRow } from '../utils/incomeCalculation';

export default function Results() {
  const { income, frequency, calculationType } = useFormSharedState();
  const rows = calculateRows(calculationType, income, frequency);
  const isGross = getIsGross(calculationType);
  const selectedRow = getSelectedRow(frequency);

  return (
    <Layout>
      <h2 className="dark:text-white text-gray-900 text-center font-bold">
        <span className="text-primary text-2xl underline mr-2">
          {isGross ? selectedRow.net : selectedRow.gross}
        </span>
        {isGross ? 'net' : 'gross'} {frequency} income
      </h2>
      <table className="w-full mt-10 shadow-light dark:shadow-dark rounded-xl overflow-hidden block sm:table sm:overflow-x-hidden overflow-x-auto sm:white-space-nowrap">
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
            return (
              <tr
                key={row.id}
                className="tracking-2 odd:bg-gray-900 dark:odd:bg-white dark:odd:text-gray-900  odd:text-white dark:text-white capitalize">
                <td className="p-6 dark:text-primary font-bold">{row.frequencyName}</td>
                <td className="p-6">{row.gross}</td>
                <td className="p-6">{row.tax}</td>
                <td className="p-6">{row.net}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}
