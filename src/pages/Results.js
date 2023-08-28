import React from 'react';
import { useSharedState } from '../context/Context';
import Layout from '../layouts/Layout';
import { columns } from '../const';

export default function Results() {
  const { income, frequency, calculationType } = useSharedState();

  const rows = [
    { id: 0, frequencyName: 'weekly', tax: 875, gross: 0, net: 0 },
    { id: 1, frequencyName: 'fortnightly', tax: 1750, gross: 0, net: 0 },
    { id: 2, frequencyName: 'monthly', tax: 3500, gross: 0, net: 0 },
    { id: 3, frequencyName: 'annually', tax: 42000, gross: 0, net: 0 }
  ];
  const isGross = calculationType === 'gross' ? true : false;
  const incomeNumber = parseInt(income);

  const selectedRow = rows.find((row) => row.frequencyName === frequency);

  if (isGross) {
    selectedRow.gross = incomeNumber;
    selectedRow.net = selectedRow.gross - selectedRow.tax;
  } else {
    selectedRow.net = incomeNumber;
    selectedRow.gross = selectedRow.net + selectedRow.tax;
  }

  let selectedRowId = selectedRow.id;
  let prevNetValue = selectedRow.net;

  rows.slice(selectedRowId + 1).forEach((row, index) => {
    const i = index + selectedRowId + 1;

    if (row.id !== selectedRow.id) {
      row.net = i === rows.length - 1 ? prevNetValue * 12 : prevNetValue * 2;
      row.gross = row.net + row.tax;
    }
  });

  let selectedRowIdRevers = selectedRow.id;
  let currentNetValue = selectedRow.net;

  for (let i = selectedRowIdRevers - 1; i >= 0; i--) {
    selectedRowIdRevers = selectedRowIdRevers - 1;
    if (selectedRowIdRevers === i && selectedRow.id !== i) {
      if (i + 1 === rows.length - 1) {
        currentNetValue = currentNetValue / 12;
      } else {
        currentNetValue = currentNetValue / 2;
      }
      rows[i].net = currentNetValue;
      rows[i].gross = currentNetValue + rows[i].tax;
    }
  }

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
