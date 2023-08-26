import React from 'react';
import InputField from '../components/InputField';
import Dropdown from '../components/Dropdown';
import Checkbox from '../components/Checkbox';
import Layout from '../Layouts/Layout';

export default function DataEntry() {
  const frequencyValues = ['annually', 'weekly', 'monthly', 'fortnighly'];
  const calculationTypeValues = ['net', 'gross'];

  return (
    <>
      <Layout>
        <InputField />
        <Dropdown values={frequencyValues} />
        <Checkbox label="Choose income type" values={calculationTypeValues} />
      </Layout>
    </>
  );
}
