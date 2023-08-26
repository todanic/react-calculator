import React from 'react';
import Layout from '../Layouts/Layout';
import Form from '../components/Form';

export default function DataEntry() {
  const frequencyValues = ['annually', 'weekly', 'monthly', 'fortnighly'];
  const calculationTypeValues = ['net', 'gross'];

  return (
    <>
      <Layout>
        <Form
          dropdownValues={frequencyValues}
          dropdownLabel="Frequency"
          checkboxValues={calculationTypeValues}
          checkboxLabel="Choose income type"
        />
      </Layout>
    </>
  );
}
