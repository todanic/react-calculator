import React from 'react';
import Layout from '../Layouts/Layout';
import Form from '../components/Form';

export default function DataEntry() {
  const frequencyValues = [
    { id: 0, value: 'annually' },
    { id: 1, value: 'weekly' },
    { id: 2, value: 'monthly' },
    { id: 3, value: 'fortnightly' }
  ];
  const calculationTypeValues = [
    { id: 0, value: 'gross', label: 'gross' },
    { id: 1, value: 'net', label: 'net' }
  ];

  return (
    <>
      <Layout>
        <Form
          dropdownValues={frequencyValues}
          dropdownLabel="periodic pay:"
          radioOptions={calculationTypeValues}
          radioLabel="choose income type:"
          inputLabel="income:"
        />
      </Layout>
    </>
  );
}
